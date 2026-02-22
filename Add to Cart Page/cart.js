
let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let cartItemsContainerEl = document.getElementById("cartItemsContainer");

function onAddCartItem() {

  let cartItemText = cartItemTextInputEl.value;

  let cartItemEl = document.createElement("li");
  cartItemEl.textContent = cartItemText;

  cartItemTextInputEl.value = "";
  cartItemsContainerEl.appendChild(cartItemEl);

}


