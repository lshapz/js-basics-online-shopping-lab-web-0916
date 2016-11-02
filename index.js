var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.random(0, 100).floor 

  cart.push({item: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const leng = cart.length
  if (!leng) {
  return console.log("Your shopping cart is empty.")
  }

  const words = []

  for (let i = 0; i < leng; i++){
    let both = cart[i]
    let item = Object.keys(both)[0]
    let price = both[item]
    words.push(`${item} at \$${price}`) 
    }
  console.log(`In your cart, you have ${words.join(', ')}.`)
}


function removeFromCart(item) {
  let thing = false
  for (let i = 0; i < cart.length; i++) {
   if (cart[i].hasOwnProperty(item)) {
      thing = true
      cart = cart.slice(0, i).concat(cart.slice(i +1))
   }
  }

  if (!thing){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(card_no){
  if (!card_no){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log("Your total cost is $${total()}, which will be charged to the card ${cardNumber}.")
  delete cart.all
}
