
function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart,product,quantity) {
  if (quantity===0) throw new RangeError
  const exist = cart.filter(item=>item.id===product.id)[0];
  if(exist){
    exist.quantity+=quantity;
  }
  else{
    if (quantity > product.stock) throw new RangeError;
    cart.push({...product, quantity});
  }
  return cart;
}

function changeQuantity(cart, id, quantity) {
  if(quantity===0) throw new RangeError;
  product = cart.filter(item=>item.id===id)[0];
  if(product){
    if(product.stock<quantity) throw new RangeError;
  else product.quantity = quantity;
  }
  return cart;
}

function removeFromCart(cart, id) {
  cart = cart.filter(item=>item.id!==id)
  return cart
}

function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
