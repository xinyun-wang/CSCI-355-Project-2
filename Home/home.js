const health = document.getElementById('health')
const leaf = document.getElementById('leaf')
const flavor = document.getElementById('flavor')
const LooseLeaf = document.getElementById('LooseLeaf')
const FlavorProfiles = document.getElementById('FlavorProfiles')
const HealthBenefit = document.getElementById('HealthBenefit')
const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 6000)
function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 100}vw)`
}
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 6000)
}
function run() {
    idx++
    changeImage()
}

const nav = document.querySelector('.menu')
window.addEventListener('scroll', fixNav)
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 400) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

const WinterEssentials = document.querySelector('.WinterEssentials')
window.addEventListener('scroll', transTea)
function transTea() {
    const triggerTop = WinterEssentials.offsetTop;
    if(window.scrollY >  triggerTop) {
        WinterEssentials.classList.add('active')
    } else {
        WinterEssentials.classList.remove('active')
    }
}

health.addEventListener('mouseover', ()=>{
    HealthBenefit.style.display = "flex";
})
health.addEventListener('mouseout', ()=>{
    HealthBenefit.style.display = "none";
})
HealthBenefit.addEventListener('mouseover', ()=>{
    HealthBenefit.style.display = "flex";
    health.classList.add('active');
})
HealthBenefit.addEventListener('mouseout', ()=>{
    HealthBenefit.style.display = "none";
    health.classList.remove('active');
})

flavor.addEventListener('mouseover', ()=>{
    FlavorProfiles.style.display = "flex";
})
flavor.addEventListener('mouseout', ()=>{
    FlavorProfiles.style.display = "none";
})
FlavorProfiles.addEventListener('mouseover', ()=>{
    FlavorProfiles.style.display = "flex";
    flavor.classList.add('active');
})
FlavorProfiles.addEventListener('mouseout', ()=>{
    FlavorProfiles.style.display = "none";
    flavor.classList.remove('active');
})

leaf.addEventListener('mouseover', ()=>{
    LooseLeaf.style.display = "flex";
})
leaf.addEventListener('mouseout', ()=>{
    LooseLeaf.style.display = "none";
})
LooseLeaf.addEventListener('mouseover', ()=>{
    LooseLeaf.style.display = "flex";
    leaf.classList.add('active');
})
LooseLeaf.addEventListener('mouseout', ()=>{
    LooseLeaf.style.display = "none";
    leaf.classList.remove('active');
})