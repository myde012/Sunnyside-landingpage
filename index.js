const Navint = document.querySelector(".Nav-int")
const menu1 = document.getElementById("menu1")
const menu2 = document.getElementById("menu2")
const menu3 = document.getElementById("menu3")
const hamburger = document.querySelector(".hamburger")



hamburger.addEventListener("click", ()=>{
    menu1.classList.toggle("menu1Toggle");
    menu2.classList.toggle("menu2Toggle");
    menu3.classList.toggle("menu3Toggle");
    Navint.classList.toggle("active")
})

