// Cookie consent. No cookies are set by this site itself.
// Analytics loads ONLY after the visitor accepts AND a cookieless provider script is set below.
(function(){
  var ANALYTICS_SRC = ""; // TODO: e.g. a privacy-friendly analytics script URL. Empty = no analytics at all.
  var KEY = "malabo-consent", box = document.getElementById("consent");
  function get(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function set(v){ try{ localStorage.setItem(KEY, v); }catch(e){} }
  function load(){ if(!ANALYTICS_SRC) return; var s=document.createElement("script"); s.src=ANALYTICS_SRC; s.defer=true; document.head.appendChild(s); }
  var c = get();
  if(c === "yes"){ load(); return; }
  if(c === "no" || !box) return;
  box.hidden = false;
  box.querySelector("[data-yes]").addEventListener("click", function(){ set("yes"); box.hidden = true; load(); });
  box.querySelector("[data-no]").addEventListener("click", function(){ set("no"); box.hidden = true; });
})();
