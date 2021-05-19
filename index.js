

var c = document.querySelectorAll(".key").length;
for (var i = 0; i < c; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function()
    {
      var b = this.innerHTML;
      play(b);
      animation(b);
    });
  }



   document.addEventListener("keypress", function(e) {
     play(e.key)
     animation(e.key);
   })

   function play(a) {
     switch (a) {
       case "a":
         var audio = new Audio("sounds/boom.wav")
         audio.play();
         break;
       case "s":
         var audio = new Audio("sounds/clap.wav")
         audio.play();
         break;
       case "d":
         var audio = new Audio("sounds/hihat.wav")
         audio.play();
         break;
       case "f":
         var audio = new Audio("sounds/boom.wav")
         audio.play();
         break;
       case "g":
         var audio = new Audio("sounds/boom.wav")
         audio.play();
         break;
       case "h":
         var audio = new Audio("sounds/boom.wav")
         audio.play();
         break;
       case "j":
         var audio = new Audio("sounds/boom.wav")
         audio.play();
         break;
       case "k":
         var audio = new Audio("sounds/boom.wav")
         audio.play();
         break;
       case "l":
         var audio = new Audio("sounds/boom.wav")
         audio.play();
         break;
       default:

     }
   }

   function animation(key)
   {
     var d = document.querySelector("." + key);
     d.classList.add("pressed");

     setTimeout(function()
   {
     d.classList.remove("pressed");
   }, 150)
   }
