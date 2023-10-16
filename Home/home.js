const shop = document.getElementById('shop-')
const dropdown = document.querySelector('.dropdownmenu')

shop.addEventListener('mouseover', ()=>{
    dropdown.style.display = "flex";
})
shop.addEventListener('mouseout', ()=>{
    dropdown.style.display = "none";
})
dropdown.addEventListener('mouseover', ()=>{
    dropdown.style.display = "flex";
})
dropdown.addEventListener('mouseout', ()=>{
    dropdown.style.display = "none";
})

const nav = document.querySelector('.menu')
window.addEventListener('scroll', fixNav)
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 120) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}