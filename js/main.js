// Cart JavaScript
let totalCart = document.getElementById('total');
totalCart.addEventListener('load', displayTotal(), false);


// displays total in cart at top of page, used in other js files
async function displayTotal() {
    let totalItems = localStorage.getItem('total');
    totalCart.innerHTML = totalItems;
}


// Login JavaScript
let loginNav = document.getElementById('login');
loginNav.addEventListener('click', Logout, false);

let isloggedIn = localStorage.getItem('loggedIn');
if (isloggedIn !== 'false') {
    loginNav.innerHTML = "";
    loginNav.innerHTML = "Logout";
}
else {
    loginNav.innerHTML = "";
    loginNav.innerHTML = "Login";
}


// if user is logged in, log them out and vice versa
function Logout() {
    if (isloggedIn !== 'false') { // currently logged in
        loginNav.innerHTML = "";
        loginNav.innerHTML = "Login";
        localStorage.setItem('loggedIn', false);
        window.location.href = "index.html";
    }
    else {                       // currently logged out
        window.location.href = "login.html";
    }
}
