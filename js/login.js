let message = document.getElementById('message');
let loginBtn = document.getElementById('login-btn').addEventListener('click', findUser, false);
let forgetPassword = document.getElementById('forget-password').addEventListener('click', passwordAlert, false);


// searches through json data to find user that matches data from the form
function findUser() {
    let emailAddress = document.getElementById('email-address').value;
    let password = document.getElementById('password').value;
    users.forEach((user) => {
        if (user.emailaddress === emailAddress && user.password === password) {
            loginUser('true', user.id);
            return;
        }
        else {
            loginUser('false', user.id);
        }
    });
}


// checks if user is correclty logged in
function loginUser(state, id) {
    if (state === 'true') {
        localStorage.setItem('loggedIn', id);
        window.location.href = "shop.html";
    }
    else if (state === 'false') {
        localStorage.setItem('loggedIn', false);
        message.innerHTML = "";
        message.innerHTML = `
        <div class="alert alert-danger text-center mb-3" id="payment-success" role="alert">
        Incorrect details
        </div>
        `;
    }
}


// display message if password forgotten
function passwordAlert() {
    message.innerHTML = "";
    message.innerHTML = `
    <div class="alert alert-warning text-center mb-3" id="payment-success" role="alert">
    An email has been sent to you. In the mean time, try password ;)
    </div>
    `;
}