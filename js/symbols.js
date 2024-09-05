let bam = document.getElementById("bam");
let bang = document.getElementById("bang");
let boo = document.getElementById("boo");
let sym = document.getElementById("symbol__img");

bam.addEventListener("click", e =>{
    console.log("test");
    sym.style.background = 'url("../assets/symbols/symbol-BAM.png")'
    console.log("test");
});

bang.addEventListener("click", e =>{
    console.log("test");
    sym.style.background = 'url("../assets/symbols/symbol-BANG.png")'
    console.log("test");
});

boo.addEventListener("click", e =>{
    console.log("test");
    sym.style.background = 'url("../assets/symbols/symbol-BOO.png")'
    console.log("test");
});