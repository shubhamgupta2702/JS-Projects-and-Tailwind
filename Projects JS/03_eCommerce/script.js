document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {id: 1, name: "Product1" , price: 29.939},
        {id: 2, name: "Product2" , price: 99.98},
        {id: 3, name: "Product3" , price: 48.98},
    ];

    const cart = [];


    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMsg = document.getElementById("empty-cart");
    const cartTotalMsg = document.getElementById("cart-total");
    const totalPriceMsg = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add("product")
        productDiv.innerHTML = `
        <span> ${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to Cart</button>`;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e) =>{
        if(e.target.tagName === "BUTTON"){
           const productId =  parseInt(e.target.getAttribute('data-id'));
           const product = products.find(p => p.id === productId);
           addToCart(product)
        }
    });

    function addToCart(product){
        cart.push(product);
        console.log(cart);
        renderCartElements();
        
    }

    function renderCartElements(){
        cartItems.innerHTML = "";
        let totalPrice = 0;


        if(cart.length){
            
        } else{
            emptyCartMsg.classList.remove("hidden")
        }
    }
})