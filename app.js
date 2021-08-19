function updateItem(isIncrease, product, price) {
  const productInput = document.getElementById(product + "-amount");
  const productAmount = productInput.value;
  if (isIncrease) {
    productInput.value = parseInt(productAmount) + 1;
  } else if (productAmount > 0) {
    productInput.value = parseInt(productAmount) - 1;
  }
  const productAmountNew = productInput.value;
  //update balance
  const productPrice = document.getElementById(product + "-price");
  productPrice.innerText = price * productAmountNew;
  //Checkout Price
  checkoutTotal();
}
function getInputValue(product){
  const productInput = document.getElementById(product + "-amount")
  const productAmount = productInput.value;
  return productAmount;
}
function checkoutTotal(){
  const phoneTotal = getInputValue("iphone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxPrice = subTotal / 10;
  const totalPrice = subTotal + taxPrice;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-price").innerText = taxPrice;
  document.getElementById("total-price").innerText = totalPrice;
}
//iphone
document
  .getElementById("increse-iphone")
  .addEventListener("click", function () {
    updateItem(true, "iphone", 1219);
  });

document
  .getElementById("decrease-iphone")
  .addEventListener("click", function () {
    updateItem(false, "iphone", 1219);
  });

//Case
document.getElementById("increse-case").addEventListener("click", function () {
  updateItem(true, "case", 59);
});
document.getElementById("decrease-case").addEventListener("click", function () {
  updateItem(false, "case", 59);
});
