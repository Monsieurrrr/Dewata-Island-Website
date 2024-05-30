window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-section");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    document.getElementById("beach-sec").style.borderBottom = "none";
    document.getElementById("sites-sec").style.borderBottom = "none";
    document.getElementById("waterfall-sec").style.borderBottom = "none";
    document.getElementById("wildlife-sec").style.borderBottom = "none";
  }

  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("beach-sec").style.borderBottom = "4px solid rgb(28, 60, 71)";
    document.getElementById("sites-sec").style.borderBottom = "none";
    document.getElementById("waterfall-sec").style.borderBottom = "none";
    document.getElementById("wildlife-sec").style.borderBottom = "none";
  } 
  if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100){
    document.getElementById("sites-sec").style.borderBottom = "4px solid rgb(28, 60, 71)";
    document.getElementById("beach-sec").style.borderBottom = "none";
    document.getElementById("waterfall-sec").style.borderBottom = "none";
    document.getElementById("wildlife-sec").style.borderBottom = "none";
  }

  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000){
    document.getElementById("waterfall-sec").style.borderBottom = "4px solid rgb(28, 60, 71)";
    document.getElementById("beach-sec").style.borderBottom = "none";
    document.getElementById("sites-sec").style.borderBottom = "none";
    document.getElementById("wildlife-sec").style.borderBottom = "none";
  }
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000){
    document.getElementById("wildlife-sec").style.borderBottom = "4px solid rgb(28, 60, 71)";
    document.getElementById("beach-sec").style.borderBottom = "none";
    document.getElementById("sites-sec").style.borderBottom = "none";
    document.getElementById("waterfall-sec").style.borderBottom = "none";
  }

  if(document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700){
    document.getElementById("beach-sec").style.borderBottom = "none";
    document.getElementById("sites-sec").style.borderBottom = "none";
    document.getElementById("waterfall-sec").style.borderBottom = "none";
    document.getElementById("wildlife-sec").style.borderBottom = "none";
  }
  
}


const carousel = document.getElementById("carousel")
let index = 0;
let images =["merusaka nusa dua.jpg","apurva resort.jpg","sanctuary villa.jpg","patra bali.jpg"]


function showImage(){
    carousel.src = images[index]
}

function slide(){

  index++
  if(index > images.length-1){
      index = 0
  }

  showImage()

}

  setInterval(slide, 3000)


window.onload(showImage())





