let wit = document.getElementById("wit");
let zilver = document.getElementById("zilver");
let goud = document.getElementById("goud");
let rood = document.getElementById("rood");
let blauw = document.getElementById("blauw");
let pet = document.getElementById("productimg");



wit.addEventListener("click", e =>{
    pet.style.background = 'url("../assets/products/pet.png")'

});

zilver.addEventListener("click", e =>{

    pet.style.background = 'url("../assets/products/pet-zilver.png")'
});

goud.addEventListener("click", function(){
     pet.style.background = 'url("../assets/products/pet-goud.png")'

});

rood.addEventListener("click", function(){
     pet.style.background = 'url("../assets/products/pet-rood.png")'

});

blauw.addEventListener("click", function(){
     pet.style.background = 'url("../assets/products/pet-blauw.png")'

});