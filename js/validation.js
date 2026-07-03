
// Name Validation
function validateName(name) {
    if (name.trim() === "") {
        return "Name is required";
    }

    if (name.trim().length < 3) {
        return "Name must be at least 3 characters";
    }

    return "";
}

// Email Validation
function validateEmail(email) {

    if (email.trim() === "") {
        return "Email is required";
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        return "Invalid email address";
    }

    return "";
}

// Password Validation
function validatePassword(password) {

    if (password === "") {
        return "Password is required";
    }

    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regex.test(password)) {
        return "Password must contain uppercase, lowercase, number and 8 characters";
    }

    return "";
}

// Confirm Password
function validateConfirmPassword(password, confirmPassword) {

    if (confirmPassword === "") {
        return "Confirm password is required";
    }

    if (password !== confirmPassword) {
        return "Passwords do not match";
    }

    return "";
}