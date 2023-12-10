const textEl = document.getElementById('text');
const text = 'Ready to checkout?';
let speed = 150;
let i = 1;

writeText();

function writeText(){
  textEl.innerText = text.slice(0,i);
  i++;

  if(i > text.length) i = 1;

  setTimeout(writeText, speed);
}

const quantityBtn = document.querySelectorAll('.quantityBtn');
const adding = document.querySelectorAll('.add');
const subtracting = document.querySelectorAll('.subtract');
const quantity = document.querySelectorAll('.quantity');
const checkout = document.getElementById('checkout');

let amount = 0;

adding.forEach( (add) => {
  add.addEventListener('click', () => {
    if(amount < 10) {
      amount += 1;
      quantityBtn.forEach( (btn) => {btn.childNodes[3].innerText = amount;})
    }
  })
});

console.log(quantityBtn[0].childNodes[3]);

subtracting.forEach( (subtract) => {
  subtract.addEventListener('click', () => {
    if(amount > 0) {
      amount -= 1;
      quantityBtn.forEach( (btn) => {btn.childNodes[3].innerText = amount;})
    }
  })
});

checkout.addEventListener('click', () => {
  alert('Thank you for your order!');
})

function dropdown() {
  document.getElementById("myDropdown").className = "dropdown-content show";
}

window.onclick = function(event) {
  if (!event.target.matches('#shop')) {
    var sharedowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < sharedowns.length; i++) {
      var openSharedown = sharedowns[i];
      if (openSharedown.classList.contains('show')) 
        openSharedown.classList.remove('show');
    }
  }
}

document.getElementById("myDropdown").addEventListener('click',function(event){
  event.stopPropagation();
});

async function loadDataAsync(){
  try {
    let response = await fetch('https://boonakitea.cyclic.app/api/teas');
    body = await response.json();
    console.log('Success:', body[2]);
  } catch(error) {
    console.log('Error:', error);
  }

  const item1 = document.getElementById('item1').getElementsByTagName('div')[0];
  item1.getElementsByTagName('h4')[0].innerText = `${body[2].earlgrey.name}`;
  item1.getElementsByTagName('p')[0].innerText = `${body[2].earlgrey.description}`;

  const item2 = document.getElementById('item2').getElementsByTagName('div')[0];
  item2.getElementsByTagName('h4')[0].innerText = `${body[2].englishbreakfast.name}`;
  item2.getElementsByTagName('p')[0].innerText = `${body[2].englishbreakfast.description}`;

  const item3 = document.getElementById('item3').getElementsByTagName('div')[0];
  item3.getElementsByTagName('h4')[0].innerText = `${body[2].genmaicha.name}`;
  item3.getElementsByTagName('p')[0].innerText = `${body[2].genmaicha.description}`;

  const item4 = document.getElementById('item4').getElementsByTagName('div')[0];
  item4.getElementsByTagName('h4')[0].innerText = `${body[2].jasminedragonpearl.name}`;
  item4.getElementsByTagName('p')[0].innerText = `${body[2].jasminedragonpearl.description}`;

  const item5 = document.getElementById('item5').getElementsByTagName('div')[0];
  item5.getElementsByTagName('h4')[0].innerText = `${body[2].masalachai.name}`;
  item5.getElementsByTagName('p')[0].innerText = `${body[2].masalachai.description}`;
 
}
loadDataAsync();

