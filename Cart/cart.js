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
