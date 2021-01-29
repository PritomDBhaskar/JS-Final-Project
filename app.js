// first item plus event
const firstItemPlus = document.getElementById("increment-one");
firstItemPlus.addEventListener("click", function () {
    let firstItemPrice = parseFloat(document.getElementById("price-one").innerHTML);
    let subTotalPrice = parseFloat(document.getElementById("subtotal").innerHTML);
    let newInputValue = parseFloat(document.getElementById("quantity-one").value);
    document.getElementById("quantity-one").value = newInputValue + 1;
    let updatedFirstItemPrice = document.getElementById("price-one").innerHTML = firstItemPrice + 1219;
    var updatedSubTotalPrice = parseFloat(document.getElementById("subtotal").innerHTML = subTotalPrice + 1219);
    let updatedTax = parseFloat(document.getElementById("tax").innerHTML = (updatedSubTotalPrice * .15).toFixed(2));
    let totalPrice = document.getElementById("total").innerHTML = updatedSubTotalPrice + updatedTax;
})

// first item minus event

const firstItemMinus = document.getElementById("decrement-one");
firstItemMinus.addEventListener("click", function () {
    let firstItemPrice = parseFloat(document.getElementById("price-one").innerHTML);
    let subTotalPrice = parseFloat(document.getElementById("subtotal").innerHTML);
    let newInputValue = parseFloat(document.getElementById("quantity-one").value);
    document.getElementById("quantity-one").value = newInputValue - 1;
    let updatedFirstItemPrice = document.getElementById("price-one").innerHTML = firstItemPrice - 1219;
    var updatedSubTotalPrice = parseFloat(document.getElementById("subtotal").innerHTML = subTotalPrice - 1219);
    let updatedTax = parseFloat(document.getElementById("tax").innerHTML = (updatedSubTotalPrice * .15).toFixed(2));
    let totalPrice = document.getElementById("total").innerHTML = updatedSubTotalPrice + updatedTax;
})

// second item plus event
const secondItemPlus = document.getElementById("increment-two");
secondItemPlus.addEventListener("click", function () {
    let secondItemPrice = parseFloat(document.getElementById("price-two").innerHTML);
    let subTotalPrice = parseFloat(document.getElementById("subtotal").innerHTML);
    let newInputValue = parseFloat(document.getElementById("quantity-two").value);
    document.getElementById("quantity-two").value = newInputValue + 1;
    let updatedSecondItemPrice = document.getElementById("price-two").innerHTML = secondItemPrice + 59;
    var updatedSubTotalPrice = parseFloat(document.getElementById("subtotal").innerHTML = subTotalPrice + 59);
    let updatedTax = parseFloat(document.getElementById("tax").innerHTML = (updatedSubTotalPrice * .15).toFixed(2));
    let totalPrice = document.getElementById("total").innerHTML = updatedSubTotalPrice + updatedTax;
})

// second item minus event

const secondItemMinus = document.getElementById("decrement-two");
secondItemMinus.addEventListener("click", function () {
    let secondItemPrice = parseFloat(document.getElementById("price-two").innerHTML);
    let subTotalPrice = parseFloat(document.getElementById("subtotal").innerHTML);
    let newInputValue = parseFloat(document.getElementById("quantity-two").value);
    document.getElementById("quantity-two").value = newInputValue - 1;
    let updatedSecondItemPrice = document.getElementById("price-two").innerHTML = secondItemPrice - 59;
    var updatedSubTotalPrice = parseFloat(document.getElementById("subtotal").innerHTML = subTotalPrice - 59);
    let updatedTax = parseFloat(document.getElementById("tax").innerHTML = (updatedSubTotalPrice * .15).toFixed(2));
    let totalPrice = document.getElementById("total").innerHTML = updatedSubTotalPrice + updatedTax;
})

// remove item one
var removeCartItemOne = document.getElementsByClassName("remove-one")[0]
    removeCartItemOne.addEventListener('click', function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
})


    
        
// remove item two
var removeCartItemTwo = document.getElementsByClassName("remove-two")[0]
removeCartItemTwo.addEventListener('click', function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
})
