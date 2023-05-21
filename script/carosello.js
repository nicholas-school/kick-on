var listaCaroselli = ["carosello-sostenibilita", "carosello-estetica", "carosello-tecnologia", ];
//"carosello-team", 

function changeSlide(carouselId, n) {
  var slideIndex = parseInt(document.getElementById(carouselId).getAttribute("slideIndex"));
  var slides = document.getElementById(carouselId).getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");

  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (n == 0) {
    slideIndex = 0;
  }
  showSlide(carouselId, slideIndex);
  document.getElementById(carouselId).setAttribute("slideIndex", slideIndex);
}

function showSlide(carouselId, index) {
  var slides = document.getElementById(carouselId).getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

for (let i = 0; i < listaCaroselli.length; i++) {
  changeSlide(listaCaroselli[i], 0)
}