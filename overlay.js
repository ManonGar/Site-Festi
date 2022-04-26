let buttons = document.querySelectorAll(".btn-overlay");
let overlay = document.querySelector(".overlay");
let closeBtn = document.getElementById("closeNav");

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       e.target.nextElementSibling.classList.toggle("show");
    })
});

// closeBtn.addEventListener('click', () => {
//     nav.style.width = "0%";
// }) 

// btn.on('click', function() {
//     nav.css("width", "100%");
// });

// closeBtn.on('click', function() {
//     nav.css("width", "0%");
// });
  
//   $('#closeNav').on('click', function() {
//     $('#myNav').css("width", "0%");
//   });

//   $('#btn-overlay').on('click', function() {
//     $('#nav').css("width", "100%");
//   });
  
//   $('#closeNav').on('click', function() {
//     $('#nav').css("width", "0%");
//   });