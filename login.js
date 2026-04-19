function login() {
    let username = document.getElementById("EmailID").value;
    let password = document.getElementById("Password").value;
    console.log("Username:", username);
    console.log("Password:", password);
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = "https://codegym.vn/"; // Redirect to dashboard or home page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}