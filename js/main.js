let filterdown = document.getElementById("filterdown");
let filterup = document.getElementById("filterup");
let filter = document.getElementById("filter");

filterdown.style.direction = "block";
filterup.style.display = "none";
filter.style.display = "none";

filterdown.addEventListener("click", e =>{
    filter.style.display = "none";
    filterdown.style.display ="none";
    filterup.style.display="block";
})
filterup.addEventListener("click", e =>{
    filter.style.display = "block";
    filterdown.style.display = "block";
    filterup.style.display = "none";
})

