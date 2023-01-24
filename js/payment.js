let loggedIn = localStorage.getItem('loggedIn'); // gets id of user who is logged in, otherwise false
let currentUser = users[loggedIn];
let PaymentDetailsDiv = document.getElementById('payment-details-div');


// if user is logged in, render form
if (loggedIn !== 'false') {
  PaymentDetailsDiv.innerHTML = "";
  PaymentDetailsDiv.innerHTML += `
    <h2 class="text-uppercase text-center">Checkout</h2>
    <h6 class="text-center mb-5">You're almost there...</h6>

              <form name="register" id="user-register"  method="get">

              <h4 class="text-uppercase text-center">Delivery Details</h4>
                <div class="form-outline mb-4">
                    <label class="form-label" for="firstname">First Name</label>
                    <input type="text" id="firstname" class="form-control form-control-lg" value="${currentUser.firstname}"/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="lastname">Last Name</label>
                    <input type="text" id="lastname" class="form-control form-control-lg" value="${currentUser.lastname}"/>
                </div>
                
                <div class="form-outline mb-4">
                    <label class="form-label" for="address1">Address Line 1</label>
                  <input type="text" id="address1" class="form-control form-control-lg" value="${currentUser.address1}"/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="address2">Address Line 2</label>
                  <input type="text" id="address2" class="form-control form-control-lg" value="${currentUser.address2}"/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="address3">Address Line 3</label>
                  <input type="text" id="address3" class="form-control form-control-lg" value="${currentUser.address3}"/>
                </div>
                <br>
                <br>
                <h4 class="text-uppercase text-center">Payment Details</h4>

                <div class="form-outline mb-4">
                <label class="form-label" for="cardname">Card Name</label>
                <input type="text" id="cardname" class="form-control form-control-lg" value="${currentUser.cardname}"/>
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="cardnumber">Card Number</label>
                <input type="text" id="cardnumber" class="form-control form-control-lg" value="${currentUser.cardnumber}"/>
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="cvc">CVC</label>
                <input type="password" id="cvc" class="form-control form-control-lg" value=""/>
                </div>

                <div id="message"></div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                  onclick="buyNow()" class="btn btn-colour btn-block btn-lg gradient-custom-4 text-body">Buy Now!</button>
                </div>

              </form>
              `;
}
// or display message
else {
  PaymentDetailsDiv.innerHTML = "";
  PaymentDetailsDiv.innerHTML += `<h2 class="text-uppercase text-center mb-5">Please log in!</h2>`
}


// checks if form data is correct
function buyNow() {
  let cvc = document.getElementById('cvc').value;

  // if correct, empty cart
  if (cvc == currentUser.cvc) {
    let message = document.getElementById('message');
    message.innerHTML = "";
    message.innerHTML = `
        <br>
        <div class="alert alert-success text-center mb-3" id="payment-success" role="alert">
        Your order has been placed! Thank you for shopping with ExtraBoard!
        </div>
        <br>
        `;
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', 0);
    displayTotal();
  }
  // else display message
  else {
    message.innerHTML = "";
    message.innerHTML += `
        <br>
        <div class="alert alert-danger text-center mb-3" id="payment-failure" role="alert">
        There seems to be a problem with the details entered.
        </div>
        <br>
        `;
  }
}
