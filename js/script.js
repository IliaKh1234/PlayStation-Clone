const barMenu = document.querySelector('#bar');
const menuItems = document.querySelector('.navigation-ul');
const closeBtn = document.getElementById('x');
const searchUl = document.querySelector(".search-ul")
const Banner = document.querySelector("#banner")
barMenu.addEventListener("click", function() {
    menuItems.style.display = 'block'
    barMenu.style.display = 'none';
    closeBtn.style.display = 'block'
    searchUl.style.display = "none";
    Banner.style.display = "none";


})
closeBtn.addEventListener("click", function() {
    menuItems.style.display = "none";
    barMenu.style.display = "block";
    closeBtn.style.display = "none";
    logo.style.display = "block";
    searchUl.style.display = "flex";
    Banner.style.display = "block";

});