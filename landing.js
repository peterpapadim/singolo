// Arrow Click Handler
function handleArrowClick(direction) {
  currentIndex = 0
  let carouselChildren = document.getElementById("carousel-container").children
  for(let i = 2; i < carouselChildren.length; i++){
    if(carouselChildren[i].style.display === "block"){
      currentIndex = parseInt(carouselChildren[i].dataset.index)
    }
  }
  changeImage(currentIndex, carouselChildren, direction)
}


// Helper method to change image in view port. Args received from #handleArrowClick()
function changeImage(currentIndex, carouselChildren, direction) {
  if(direction === "forward"){
    switch(currentIndex){
      case 1:
        carouselChildren[2].style.display = "none";
        carouselChildren[3].style.display = "block";
        break
      case 2:
        carouselChildren[3].style.display = "none";
        carouselChildren[4].style.display = "block";
        break
      case 3:
        carouselChildren[4].style.display = "none";
        carouselChildren[5].style.display = "block";
        break
      case 4:
        carouselChildren[5].style.display = "none";
        carouselChildren[2].style.display = "block";
        break
    }
  }
  else {
    switch(currentIndex){
      case 1:
        carouselChildren[2].style.display = "none";
        carouselChildren[5].style.display = "block";
        break
      case 2:
        carouselChildren[3].style.display = "none";
        carouselChildren[2].style.display = "block";
        break
      case 3:
        carouselChildren[4].style.display = "none";
        carouselChildren[3].style.display = "block";
        break
      case 4:
        carouselChildren[5].style.display = "none";
        carouselChildren[2].style.display = "block";
        break
    }
  }
}

