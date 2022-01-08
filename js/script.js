const hamburger = document.getElementById("hamburger")
console.log(hamburger);
const menu = document.getElementById("menu")

hamburger.addEventListener('click', () =>{
    menu.classList.toggle('show');
})