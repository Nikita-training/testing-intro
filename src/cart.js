
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

function calculateCartSubtotal(cart) {
  const summ = cart.reduce((total,item)=> total+item.price*item.quantity,0)
  return summ
}

function calculateOrderTotal(cart, promo) {
  let delivery = 30000
  const subtotal = calculateCartSubtotal(cart);
  let discount = 0;
  if (subtotal>50000) delivery = 0;
  if (promo==="SAVE10" && subtotal>20000) discount = 0.1*subtotal
  
  const total = delivery+subtotal - discount
  return {
    subtotal: subtotal,
    discount: discount,
    delivery:delivery,
    total:total
  }
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
