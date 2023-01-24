let cart;
let total = document.getElementById('total');
const productsDiv = document.querySelector(".products");


// RENDER PRODUCTS
function renderProdcuts() {
    products.forEach((product) => {
        productsDiv.innerHTML += `
              <div class="col mb-5">
              <div class="card h-100">
                  <img class="card-img-top shop-img" src="${product.imgSrc}" alt="${product.name}" />
                  <div class="card-body p-4">
                      <div class="text-center">
                          <h5 class="fw-bolder">${product.name}</h5>
                          &euro;${product.price}
                      </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="addToCart(${product.id})" href="#">Add to cart</a></div>
                  </div>
              </div>
          </div>
          `;
    });
}

renderProdcuts();


// Cart Array
if (localStorage.getItem('cart') == null) {
    cart = [];
    total.innerHTML = 0;
}
else {
    cart = JSON.parse(localStorage.getItem('cart'));
    total.innerHTML = cart.length;
}


// Total Items
if (localStorage.getItem('total') == null) {
    localStorage.setItem('total', 0);
}
else {
    displayTotal();  // function from main.js
}


//ADD TO CART
function addToCart(id) {
    // check if product is already in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberofUnits('plus', id);
    }
    else {
        changeTotalItems('plus');
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item,
            units: 1,
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}


// if more than one added
function changeNumberofUnits(action, id) {
    cart = cart.map((item) => {
        let units = item.units;
        if (item.id === id) {
            if (action === 'plus') {
                units++;
                changeTotalItems('plus');
            }
            else if (action === 'minus') {
                units--;
                changeTotalItems('minus');
            }
        }
        return {
            ...item,
            units,
        };
    });
}

// change overall total items
function changeTotalItems(action) {

    let totalItems = localStorage.getItem('total');

    if (action === 'plus') {
        totalItems++;
    }
    else if (action === 'minus') {
        totalItems--;
    }
    localStorage.setItem('total', totalItems);
    displayTotal();  // function from main.js
}
