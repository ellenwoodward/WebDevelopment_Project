let loggedIn = localStorage.getItem('loggedIn'); // gets id of user who is logged in, otherwise false
let currentUser = users[loggedIn];
let userDetailsDiv = document.getElementById('user-details-div');


// if user is logged in
if (loggedIn !== 'false') {
  userDetailsDiv.innerHTML = "";
  userDetailsDiv.innerHTML += `
    <h2 class="text-uppercase text-center mb-5">Update User Details</h2>

              <form name="register" id="user-register"  method="get">
                <div class="form-outline mb-4">
                    <label class="form-label" for="firstname">First Name</label>
                    <input type="text" id="firstname" class="form-control form-control-lg" value="${currentUser.firstname}"/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="lastname">Last Name</label>
                    <input type="text" id="lastname" class="form-control form-control-lg" value="${currentUser.lastname}"/>
                </div>
                
                <div class="form-outline mb-4">
                    <label class="form-label" for="email">Email Address</label>
                    <input type="email" id="email" class="form-control form-control-lg" value="${currentUser.emailaddress}"/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="dob">Date of Birth</label>
                  <input type="date" id="dob" class="form-control form-control-lg" value="${currentUser.dob}"/>
                </div>

                <br>
                <br>
                <h4 class="text-uppercase text-center">Address</h4>

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

                <div class="d-flex justify-content-center">
                  <button type="button"
                  onclick="updateDetails()" class="btn btn-colour btn-block btn-lg gradient-custom-4 text-body">Update</button>
                </div>

              </form>
              `;
}
// else display message
else {
  userDetailsDiv.innerHTML = "";
  userDetailsDiv.innerHTML += `<h2 class="text-uppercase text-center mb-5">Please log in!</h2>`
}


// display message
function updateDetails() {
  userDetailsDiv.innerHTML += `
    <br>
    <br>
    <div class="alert alert-success text-center mb-3" id="payment-success" role="alert">
    Your details have been updated!
    </div>
    `;
}
