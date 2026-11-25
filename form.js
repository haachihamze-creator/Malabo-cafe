// Spam traps for the contact form: hidden honeypot field + minimum fill time.
// These stop simple bots only. Real protection must also run on the server that receives the form.
(function(){
  var f=document.getElementById("contact-form"); if(!f) return;
  var t0=Date.now();
  f.addEventListener("submit",function(e){
    var trap=f.querySelector('[name="website"]');
    if((trap&&trap.value)||Date.now()-t0<3000){ e.preventDefault(); }
  });
})();
