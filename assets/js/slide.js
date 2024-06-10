function createDots() {
  var container = document.querySelector('.dots');
  var slides = document.getElementsByClassName('mySlides');
  for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement('span');
      dot.classList.add('dot');  // Individual dots
      dot.setAttribute('onclick', 'currentDiv(' + (i + 1) + ')');
      container.appendChild(dot);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  createDots();  // Ensure this runs first
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');  // This is correct if individual dots have class 'dot'
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
      showDivs(slideIndex += n);
  }

  function showDivs(n) {
      // console.log("Function showDivs called with n =", n); 
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (var i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
  }

  // Attaching event listeners to the prev and next buttons
  document.querySelector('.prev').addEventListener('click', function() {
    plusDivs(-1);
});
document.querySelector('.next').addEventListener('click', function() {
    plusDivs(1);
});
});