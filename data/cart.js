export let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add an element on the cart
export function updateCart(productId){
    let matchingItem;
    cart.forEach((item, index) => {
        if(productId === item.productId && !matchingItem){
            matchingItem = item;
        }
    });
    if(matchingItem){
        matchingItem.quantity += 1;
    }else{
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    saveToStorage();
}

// Save the cart on the local storage
function saveToStorage(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove an element from the cart
export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((item) => {
        if(item.productId !== productId){
            newCart.push(item);
        }
    });
    cart = newCart;
    saveToStorage();
}