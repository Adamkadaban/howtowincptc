// Cloudflare Web Analytics. Loads only on the production host and honors a
// ?ga_optout=1 self-exclusion flag.
(function () {
  // Clear any stale analytics cookies from previous setups.
  try {
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
  } catch (e) {}

  try {
    var params = new URLSearchParams(window.location.search);
    if (params.has("ga_optout")) {
      if (params.get("ga_optout") === "0") {
        localStorage.removeItem("ga_optout");
      } else {
        localStorage.setItem("ga_optout", "1");
      }
    }
  } catch (e) {}

  var host = window.location.hostname;
  var isProdHost = host === "howtowincptc.com" || host === "www.howtowincptc.com";
  var optedOut = false;
  try { optedOut = localStorage.getItem("ga_optout") === "1"; } catch (e) {}
  if (!isProdHost || optedOut) return;

  var beacon = document.createElement("script");
  beacon.defer = true;
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.setAttribute("data-cf-beacon", JSON.stringify({ token: "562d6a080d9640829ffba6338c93a4b6" }));
  document.head.appendChild(beacon);
})();
