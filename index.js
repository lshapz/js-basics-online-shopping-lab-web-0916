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

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.random(0, 100).floor 

  cart.push({item: price})
  console.log(`${item} has been added to your cart.`)
  return cart

}
function viewCart() {
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

 return console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}


// function viewCart(){
// const leng = cart.length
// if (!leng) {
//  return console.log("Your shopping cart is empty.")
// } ;
//   const cart_words = []

// for (let i=0; i < leng; i++){
//   let both = cart[i]
//   let item = Object.keys(both)[0]
//   let price = both[item]

//   cart_words.push(`${item} at \$${price}`)
    
//   }

// console.log(`In your cart, you have ${cart_words.join(', ')}.`)

// }