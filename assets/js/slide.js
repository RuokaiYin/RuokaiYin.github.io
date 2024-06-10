// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }

document.addEventListener('DOMContentLoaded', function() {
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
      showDivs(slideIndex += n);
  }

  function showDivs(n) {
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (var i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
  }

  document.querySelector('.prev').addEventListener('click', function() { plusDivs(-1); });
  document.querySelector('.next').addEventListener('click', function() { plusDivs(1); });
});