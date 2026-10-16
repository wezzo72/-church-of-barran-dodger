(function () {
  if (window.__bdNetworkHit) return;
  var path = location.pathname || "";
  if (path.indexOf("/-church-of-barran-dodger/") === -1) return;
  window.__bdNetworkHit = true;
  var key = /publishing-house\.html$/i.test(path)
    ? "bd-wezzo72-publishing-webhits"
    : "bd-wezzo72-church-webhits";
  var img = new Image();
  img.referrerPolicy = "no-referrer";
  img.src = "https://countapi.mileshilliard.com/api/v1/hit/" + encodeURIComponent(key) + "?t=" + Date.now();
})();
