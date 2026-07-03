

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
   
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Validation

    const nameError = validateName(name);
    if (nameError) {
        alert(nameError);
        return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
        alert(emailError);
        return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
        alert(passwordError);
        return;
    }

    const confirmError = validateConfirmPassword(password, confirmPassword);
    if (confirmError) {
        alert(confirmError);
        return;
    }

    // Get Users

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check Email

    const exist = users.find(user => user.email === email);

    if (exist) {
        alert("Email already exists");
        return;
    }

    // New User

    const newUser = {

        id: Date.now(),

        name,

        email,

        password

    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");

    window.location.href = "login.html";
});