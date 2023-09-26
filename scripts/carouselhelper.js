var carouselList = document.getElementsByClassName("carousel");

Array.from(carouselList).forEach(carousel => {
  var carouselItems = carousel.getElementsByClassName("carousel-item");
  var carouselIndicators = carousel.getElementsByClassName("carousel-indicators")[0];
  
  Array.from(carouselItems).forEach((item, index) => {
    //<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-target", "#demo");
    button.setAttribute("data-bs-slide-to", index);
    if (index == 0) {
        button.setAttribute("class", "active");
    }
    //button.innerHTML = index;
    
    carouselIndicators.appendChild(button);
  });
});