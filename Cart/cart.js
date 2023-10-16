
function changeColor() {
  document.getElementById("shop").onmouseover = function() {document.getElementById("down").style.color = "#E71939";}
  document.getElementById("shop").onmouseout = function() {document.getElementById("down").style.color = "black";}
}

function changeColorCart() {
  document.getElementById("cart").onmouseover = function() {document.getElementById("cart").style.color = "#E71939";}
  document.getElementById("cart").onmouseout = function() {document.getElementById("cart").style.color = "black";}
}

window.onload=function(){
  const search = document.querySelector('.search')
  const btn = document.querySelector('.btn')
  const input = document.querySelector('.input')

  btn.addEventListener('click', () => {
      search.classList.toggle('active')
      input.focus()
  })
}


function dropdown() {
  document.getElementById("myDropdown").className = "dropdown-content show";
}

window.onclick = function(event) {
  if (!event.target.matches('#shop')) {

      var sharedowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < sharedowns.length; i++) {
          var openSharedown = sharedowns[i];
          if (openSharedown.classList.contains('show')) {
              openSharedown.classList.remove('show');
          }
      }
  }
}

document.getElementById("myDropdown").addEventListener('click',function(event){
  event.stopPropagation();
});


const progress = document.getElementById('progress');
const adding = document.querySelectorAll('.add');
const subtracting = document.querySelectorAll('.subtract');
const quantity = document.querySelectorAll('.quantity');
const checkout = document.getElementById('checkout');

let amount = 0;

adding.forEach( (add) => {
  add.addEventListener('click', () => {
    if(amount < 100) {
      amount += 10;
      progress.style.width = amount + '%';
    }
  })
});

subtracting.forEach( (subtract) => {
  subtract.addEventListener('click', () => {
    if(amount > 0) {
      amount -= 10;
      progress.style.width = amount + '%';
    }
  })
});

checkout.addEventListener('click', () => {
  alert('Thank you for your order!');
})