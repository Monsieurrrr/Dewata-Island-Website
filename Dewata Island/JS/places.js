const carousel = document.getElementById("carousel")

let index = 0;
let images=["merusaka nusa dua.jpg","bed.jpg","livingroom.jpg","bathroom.jpg","pool.jpg"]

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

    setInterval(slide, 1500)

    window.onload(showImage())