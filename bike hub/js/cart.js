function addToCart(serviceName, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let service = { serviceName, price, imageUrl };

    // Check if the service is already in the cart
    let found = cart.find(item => item.serviceName === serviceName);
    if (found) {
        alert('This service is already added to your cart.');
    } else {
        cart.push(service);

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Service added to cart.');
        updateCartCounter();
    }
}

function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.length;
    // Assuming you have an element with an id 'cart-count' where the number of items in the cart will be displayed
    document.getElementById('cart-count').textContent = cartCount;
}
