function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

$(document).ready(function(){
  $('.food-slider').slick({
    autoplay:true,
    autoplaySpeed:1000,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
    

  });


});