    const carousel = document.getElementById("carousel")

let index = 0;
let images=["nusa_penida.png","bedugul.png","sidemen_valley.png","nusa dua.png"]

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





const rent = document.getElementById("rent");
const tour = document.getElementById("tour");
const TypeOption = document.getElementById("type-option");
const optionHead = document.getElementById("option-0");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const budget1 = document.getElementById("budget-1");
const budget2 = document.getElementById("budget-2");
const budget3 = document.getElementById("budget-3");




rent.addEventListener("click", ()=>{
    rent.style.backgroundColor = "white"
    rent.style.color = "black"
    tour.style.backgroundColor = "rgba(255, 181, 149, 0.507)"
    tour.style.color = "white"
    TypeOption.textContent = "PLACES"
    optionHead.textContent = "Bedrooms"
    option1.textContent = "1BR"
    option2.textContent = "2BR"
    option3.textContent = "3BR"
    option4.textContent = "4BR"
    budget1.textContent = "Rp. 1 - 999.999"
    budget2.textContent = "Rp. 1.000.000 - 4.999.999"
    budget3.textContent = "Rp. 5.000.000 - 20.000.000"
})

tour.addEventListener("click", ()=>{
    tour.style.backgroundColor = "white"
    tour.style.color = "black"
    rent.style.backgroundColor = "rgba(255, 181, 149, 0.507)"
    rent.style.color = "white"
    TypeOption.textContent = "TOURISM"
    optionHead.textContent = "Destination"
    option1.textContent = "Beach"
    option2.textContent = "Sacred & religious sites"
    option3.textContent = "Waterfall"
    option4.textContent = "Park"
    budget1.textContent = "Rp. 1 - 199.000"
    budget2.textContent = "Rp. 201.000 - 499.000"
    budget3.textContent = "Rp. 500.000 - 1.000.000"
})


window.onload(showImage())