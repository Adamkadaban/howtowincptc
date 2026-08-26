// Google Analytics 4 for howtowincptc.com, gated behind cookie consent.
// A small consent prompt (bottom-right, styled to match mdBook's theme popups)
// is shown to every visitor. gtag is not loaded and no cookies are set until
// the visitor accepts. The choice persists in localStorage.
(function () {
  var GA_ID = "G-H5BYXRXR47";
  var PRIVACY_URL = "/privacy.html";
  var host = window.location.hostname;
  if (host !== "howtowincptc.com" && host !== "www.howtowincptc.com") return;

  function loadAnalytics() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }
  window.loadAnalytics = loadAnalytics;

  function clearGaCookies() {
    var stale = document.cookie.split(";");
    for (var i = 0; i < stale.length; i++) {
      var name = stale[i].split("=")[0].trim();
      if (name === "_ga" || name === "_gid" || name === "_gat" ||
          name.indexOf("_ga_") === 0 || name.indexOf("_gat_") === 0) {
        var expire = "; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        var parts = window.location.hostname.split(".");
        var registrable = parts.slice(-2).join(".");
        document.cookie = name + "=" + expire;
        document.cookie = name + "=" + expire + "; domain=" + window.location.hostname;
        document.cookie = name + "=" + expire + "; domain=." + registrable;
      }
    }
  }

  // Privacy-page opt-out control (#cookie-choice): renders from the saved
  // choice on every load so it stays consistent across refreshes, and toggles
  // between disable and re-enable.
  function renderChoice() {
    var p = document.getElementById("cookie-choice");
    if (!p) return;
    var denied = false;
    try { denied = localStorage.getItem("cookieConsent") === "denied"; } catch (e) {}
    if (denied) {
      p.innerHTML = 'Analytics is disabled in this browser. <a href="#" id="cookie-reenable">Turn it back on</a>.';
      p.querySelector("#cookie-reenable").addEventListener("click", function (e) {
        e.preventDefault();
        try { localStorage.setItem("cookieConsent", "granted"); } catch (e) {}
        window["ga-disable-" + GA_ID] = false;
        loadAnalytics();
        renderChoice();
      });
    } else {
      p.innerHTML = '<a href="#" id="cookie-optout">Disable analytics on this site</a>.';
      p.querySelector("#cookie-optout").addEventListener("click", function (e) {
        e.preventDefault();
        try { localStorage.setItem("cookieConsent", "denied"); } catch (e) {}
        window["ga-disable-" + GA_ID] = true;
        clearGaCookies();
        renderChoice();
      });
    }
  }

  function buildPrompt() {
    var box = document.createElement("div");
    box.id = "cookie-consent";
    box.className = "cookie-consent";
    box.setAttribute("role", "region");
    box.setAttribute("aria-label", "Cookie consent");
    box.innerHTML =
      '<p class="cookie-consent-text">I use <a href="' + PRIVACY_URL + '">cookies</a>' +
      ' for anonymous analytics to see which pages help. Okay with that?</p>' +
      '<div class="cookie-consent-actions">' +
        '<button type="button" class="cookie-btn cookie-decline">Decline</button>' +
        '<button type="button" class="cookie-btn cookie-accept">Accept</button>' +
      '</div>';
    document.body.appendChild(box);
    window.requestAnimationFrame(function () { box.classList.add("is-visible"); });

    function remember(v) { try { localStorage.setItem("cookieConsent", v); } catch (e) {} }
    function dismiss() {
      box.classList.remove("is-visible");
      window.setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 260);
    }
    box.querySelector(".cookie-accept").addEventListener("click", function () {
      remember("granted"); loadAnalytics(); dismiss();
    });
    box.querySelector(".cookie-decline").addEventListener("click", function () {
      remember("denied"); dismiss();
    });
  }

  function start() {
    renderChoice();
    var choice = null;
    try { choice = localStorage.getItem("cookieConsent"); } catch (e) {}
    if (choice === "granted") { loadAnalytics(); return; }
    if (choice === "denied") return;

    // Prior consent is legally required for EU/EEA/UK visitors. Detect them by
    // timezone - no server, no third-party geo-IP call. European-timezone
    // visitors see the prompt; everyone else gets analytics without one.
    var inEurope = false;
    try {
      var tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "");
      inEurope = tz.indexOf("Europe/") === 0 ||
        tz === "Atlantic/Canary" || tz === "Atlantic/Madeira" ||
        tz === "Atlantic/Azores" || tz === "Atlantic/Reykjavik";
    } catch (e) {}

    if (!inEurope) {
      try { localStorage.setItem("cookieConsent", "granted"); } catch (e) {}
      loadAnalytics();
      return;
    }
    buildPrompt(); // European visitor: prompt for consent
  }

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();
