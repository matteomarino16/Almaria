/* =========================================================
   Almarìa — Case Mediterranee
   ========================================================= */
(function () {
  "use strict";

  // Email che riceve le richieste dal form
  var CONTACT_EMAIL = "almariacasemediterranee@gmail.com";

  document.documentElement.classList.remove("no-js");

  /* ---------- Header: stato allo scroll ---------- */
  var header = document.getElementById("header");
  var heroBrandEl = document.querySelector(".hero__brand");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
    // header chiaro/trasparente finché la foto dell'hero è sotto di lui
    if (heroBrandEl) header.classList.toggle("on-hero", heroBrandEl.getBoundingClientRect().bottom > header.offsetHeight);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Logo dell'hero che "vola" nell'header ---------- */
  var heroLogo = document.getElementById("hero-logo");
  var headerBrand = header.querySelector(".header__brand");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (heroLogo && headerBrand) {
    var heroTag = heroLogo.querySelector(".hero__tag");
    var heroLead = document.querySelector(".hero__brand .hero__lead");
    var heroScroll = document.querySelector(".hero__scroll");
    var start, target, distance;

    document.documentElement.classList.add("js-brand");

    var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
    var ease = function (t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };

    var measure = function () {
      heroLogo.style.transform = "none";
      var r = heroLogo.getBoundingClientRect();
      var hb = headerBrand.getBoundingClientRect();
      start = { x: r.left + r.width / 2, y: r.top + window.scrollY + r.height / 2, h: r.height };
      target = { x: hb.left + hb.width / 2, y: header.offsetHeight / 2, h: header.offsetHeight * 0.82 };
      // il viaggio dura finché la sezione del logo esce dallo schermo
      var brand = heroLogo.parentElement.getBoundingClientRect();
      var brandBottom = brand.bottom + window.scrollY;
      distance = Math.max(start.y - target.y, brandBottom - header.offsetHeight - window.innerHeight * 0.25, 1);
      update();
    };

    var update = function () {
      var y = window.scrollY;
      var p = clamp(y / distance, 0, 1);

      if (reduceMotion) {
        header.classList.toggle("show-brand", p >= 1);
        return;
      }

      var e = ease(p);
      var tx = (target.x - start.x) * e;
      var desiredY = start.y + (target.y - start.y) * e;   // posizione voluta (viewport)
      var ty = desiredY - (start.y - y);                   // differenza dalla posizione naturale
      var scale = 1 + (target.h / start.h - 1) * e;
      heroLogo.style.transform = "translate3d(" + tx + "px," + ty + "px,0) scale(" + scale + ")";

      // dissolvenza finale: il logo dell'hero lascia il posto a quello dell'header
      var fade = p < .88 ? 1 : 1 - (p - .88) / .12;
      heroLogo.style.opacity = fade;
      heroLogo.style.visibility = p >= 1 ? "hidden" : "visible";
      header.classList.toggle("show-brand", p >= .9);

      if (heroTag) heroTag.style.opacity = clamp(1 - e * 1.6, 0, 1);
      if (heroLead) heroLead.style.opacity = clamp(1 - p * 3, 0, 1);
      if (heroScroll) heroScroll.style.opacity = clamp(1 - p * 4, 0, 1);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    measure();
  }

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  var backdrop = document.getElementById("nav-backdrop");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    document.body.classList.toggle("menu-open", open);
    if (backdrop) { backdrop.hidden = !open; backdrop.classList.toggle("is-open", open); }
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });
  if (backdrop) backdrop.addEventListener("click", function () { setMenu(false); });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  /* ---------- Link attivo nel menu ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = nav.querySelectorAll('a[href^="#"]');
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Animazioni reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Placeholder per immagini mancanti ---------- */
  document.querySelectorAll(".ph img").forEach(function (img) {
    function markMissing() { img.parentElement.classList.add("is-missing"); }
    if (img.complete && img.naturalWidth === 0) markMissing();
    img.addEventListener("error", markMissing);
    img.addEventListener("load", function () { img.parentElement.classList.remove("is-missing"); });
  });

  /* ---------- Lightbox (galleria + foto delle case) ---------- */
  var lightbox = document.getElementById("lightbox");
  var lbImg = lightbox.querySelector(".lightbox__img");
  var lbCaption = lightbox.querySelector(".lightbox__caption");
  var slides = [];
  var current = 0;
  var lastFocus = null;

  function show(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    var s = slides[current];
    lbImg.src = s.src;
    lbImg.alt = s.alt;
    lbCaption.textContent = s.alt + "  ·  " + (current + 1) + " / " + slides.length;
    // precarica la successiva
    var next = slides[(current + 1) % slides.length];
    if (next) { var pre = new Image(); pre.src = next.src; }
  }

  function openLightbox(list, index) {
    if (!list.length) return;
    slides = list;
    lastFocus = document.activeElement;
    show(index || 0);
    lightbox.hidden = false;
    requestAnimationFrame(function () { lightbox.classList.add("is-open"); });
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox__close").focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(function () { lightbox.hidden = true; }, 300);
    if (lastFocus) lastFocus.focus();
  }

  // Galleria generale
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll(".gallery__item"));
  galleryItems.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var available = galleryItems.filter(function (b) { return !b.classList.contains("is-missing"); });
      var list = available.map(function (b) {
        var img = b.querySelector("img");
        return { src: img.currentSrc || img.src, alt: img.alt };
      });
      openLightbox(list, available.indexOf(btn));
    });
  });

  // Mosaico di ogni casa: assets/img/case/<nome>-1.jpg ... <nome>-N.jpg
  document.querySelectorAll(".house[data-gallery]").forEach(function (house) {
    var key = house.getAttribute("data-gallery");
    var count = parseInt(house.getAttribute("data-count"), 10) || 1;
    var name = house.getAttribute("data-name") || "";
    var list = [];
    for (var i = 1; i <= count; i++) {
      list.push({ src: "assets/img/case/" + key + "-" + i + ".jpg", alt: name });
    }
    house.querySelectorAll(".mosaic__item").forEach(function (item) {
      item.addEventListener("click", function (e) {
        var idx = e.target.closest(".mosaic__all") ? 0 : parseInt(item.getAttribute("data-index"), 10) || 0;
        openLightbox(list, idx);
      });
    });
    var allBtn = house.querySelector(".house__gallery-btn");
    if (allBtn) allBtn.addEventListener("click", function () { openLightbox(list, 0); });
  });

  lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox__prev").addEventListener("click", function () { show(current - 1); });
  lightbox.querySelector(".lightbox__next").addEventListener("click", function () { show(current + 1); });
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) setMenu(false);
      return;
    }
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // swipe su mobile
  var touchX = null;
  lightbox.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  /* ---------- Schede delle case ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".houses__tab"));
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) { panel.hidden = !on; panel.classList.toggle("is-active", on); }
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { selectTab(tab); });
    tab.addEventListener("keydown", function (e) {
      var j = null;
      if (e.key === "ArrowRight") j = (i + 1) % tabs.length;
      if (e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") j = 0;
      if (e.key === "End") j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); selectTab(tabs[j], true); }
    });
  });

  // "Richiedi disponibilità" preseleziona la casa nel form
  document.querySelectorAll("[data-book]").forEach(function (link) {
    link.addEventListener("click", function () {
      var name = link.getAttribute("data-book");
      var select = document.querySelector('#contact-form select[name="appartamento"]');
      if (!select) return;
      Array.prototype.forEach.call(select.options, function (o) {
        if (o.text.indexOf(name) === 0) select.value = o.value || o.text;
      });
    });
  });

  /* ---------- Form di contatto ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  var arrivo = form.elements.arrivo;
  var partenza = form.elements.partenza;

  // date minime: oggi
  var today = new Date();
  var iso = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  arrivo.min = iso;
  partenza.min = iso;
  arrivo.addEventListener("change", function () {
    partenza.min = arrivo.value || iso;
    if (partenza.value && partenza.value <= arrivo.value) partenza.value = "";
  });

  function setStatus(msg, type) {
    status.textContent = msg;
    status.className = "form__status" + (type ? " is-" + type : "");
  }

  function formatDate(v) {
    if (!v) return "";
    var p = v.split("-");
    return p[2] + "/" + p[1] + "/" + p[0];
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;

    form.querySelectorAll(".has-error").forEach(function (el) { el.classList.remove("has-error"); });

    ["nome", "email", "arrivo", "partenza"].forEach(function (name) {
      var input = form.elements[name];
      if (!input.value.trim() || !input.checkValidity()) {
        input.closest(".field").classList.add("has-error");
        ok = false;
      }
    });

    if (arrivo.value && partenza.value && partenza.value <= arrivo.value) {
      partenza.closest(".field").classList.add("has-error");
      setStatus("La data di partenza deve essere successiva all'arrivo.", "error");
      return;
    }

    if (!form.elements.privacy.checked) {
      form.elements.privacy.closest(".check").classList.add("has-error");
      ok = false;
    }

    if (!ok) {
      setStatus("Compila i campi obbligatori evidenziati.", "error");
      var firstErr = form.querySelector(".has-error input, .has-error select");
      if (firstErr) firstErr.focus();
      return;
    }

    var f = form.elements;
    var servizi = Array.prototype.map.call(
      form.querySelectorAll('input[name="servizi"]:checked'),
      function (c) { return c.value; }
    );
    var subject = "Richiesta disponibilità — " + f.nome.value.trim();
    var body = [
      "Nome: " + f.nome.value.trim(),
      "Email: " + f.email.value.trim(),
      "Telefono: " + (f.telefono.value.trim() || "—"),
      "Casa: " + (f.appartamento.value || "Nessuna preferenza"),
      "Arrivo: " + formatDate(f.arrivo.value),
      "Partenza: " + formatDate(f.partenza.value),
      "Ospiti: " + f.ospiti.value,
      "Servizi extra: " + (servizi.length ? servizi.join(", ") : "—"),
      "",
      f.messaggio.value.trim()
    ].join("\n");

    // Senza backend apriamo il client email già compilato.
    // Per l'invio diretto collegare un servizio (es. Formspree, Netlify Forms, PHP mail).
    window.location.href = "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    setStatus("Grazie! Si sta aprendo il tuo programma di posta con la richiesta pronta da inviare.", "ok");
    form.reset();
  });

  /* ---------- Anno nel footer ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
