$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
       }else{
           $('.navbar').removeClass("sticky");
       } 
       if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
       }else{
            $('.scroll-up-btn').removeClass("show");
       }
    });

    //Botão Up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // menu/navbar Responsivo
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}