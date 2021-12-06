// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};



// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((shroom) => {
    if (state.mushrooms) {
      shroom.style.visibility = 'visible';
    } else {
      shroom.style.visibility = 'hidden';
    }
})}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPep) => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
})}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  state.whiteSauce ? sauce.classList.add('sauce-white') : sauce.classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  state.glutenFreeCrust ? crust.classList.add('crust-gluten-free') : crust.classList.remove('crust-gluten-free');
   
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepBtn = document.querySelector('.btn.btn-pepperoni');

  pepBtn.addEventListener('click', function () {
    if(!state.pepperoni) {
      pepBtn.classList.add('active')}
    else {
      pepBtn.classList.remove('active')}
})

const mushBtn = document.querySelector('.btn.btn-mushrooms');

  mushBtn.addEventListener('click', function () {
    if(!state.mushrooms) {
      mushBtn.classList.add('active')}
    else {
      mushBtn.classList.remove('active')}
})

const grPepBtn = document.querySelector('.btn.btn-green-peppers');

grPepBtn.addEventListener('click', function () {
    if(!state.greenPeppers) {
      grPepBtn.classList.add('active')}
    else {
      grPepBtn.classList.remove('active')}
})

const wSauBtn = document.querySelector('.btn.btn-sauce');

wSauBtn.addEventListener('click', function () {
    if(state.whiteSauce === true) {
      wSauBtn.classList.remove('active')}
    else {
      wSauBtn.classList.add('active')}
})

const crustBtn = document.querySelector('.btn.btn-crust');

crustBtn.addEventListener('click', function () {
  if(state.glutenFreeCrust) {
    crustBtn.classList.remove('active')}
  else {
    crustBtn.classList.add('active')}
})
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;

  const pepPrice = document.querySelector('#pepPrice');
  if (state.pepperoni) {
    totalPrice = totalPrice + ingredients.pepperoni.price;

    pepPrice.innerHTML = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;
  }
  if (!state.pepperoni) pepPrice.innerHTML = ''; 

  const mushPrice = document.querySelector('#mushPrice');
  if (state.mushrooms) {
    totalPrice = totalPrice + ingredients.mushrooms.price;
    mushPrice.innerHTML = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
  }  
  if (!state.mushrooms) mushPrice.innerHTML = ''; 

  const gPepPrice = document.querySelector('#gPepPrice');
  if (state.greenPeppers) {
    totalPrice = totalPrice + ingredients.greenPeppers.price;
   gPepPrice.innerHTML = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
  }
  if (!state.greenPeppers) gPepPrice.innerHTML = ''; 

  const wSauPrice = document.querySelector('#wSauPrice');
  if (state.whiteSauce) {
   wSauPrice.innerHTML = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
   totalPrice = totalPrice + ingredients.whiteSauce.price;
  }   
  if (!state.whiteSauce) wSauPrice.innerHTML = ''; 

  const gfcPrice = document.querySelector('#gfcPrice');
  if (state.glutenFreeCrust) {
   totalPrice = totalPrice + ingredients.glutenFreeCrust.price;
   gfcPrice.innerHTML = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;    
  }   
  if (!state.glutenFreeCrust) gfcPrice.innerHTML = ''; 

  const displayTotalPrice = document.querySelector('#totalPrice');
  displayTotalPrice.innerHTML = `$${totalPrice}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
