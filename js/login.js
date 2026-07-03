// login.js

// إذا كان المستخدم مسجل بالفعل
const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    window.location.href = "home.html";
}

// Login Form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();

    const password = document.getElementById("password").value;

    const remember = document.getElementById("remember").checked;

    // Validation
    const emailError = validateEmail(email);

    if (emailError) {
        alert(emailError);
        return;
    }

    if (password === "") {
        alert("Password is required");
        return;
    }

    // Get Users
    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    // Search User
    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        alert("Invalid email or password");
        return;
    }

    // Remember Me
    if (remember) {

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

    } else {

        sessionStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

    }

    alert("Login Successful");

    window.location.href = "home.html";

});