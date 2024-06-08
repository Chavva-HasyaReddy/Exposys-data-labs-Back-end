document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Save the user data in localStorage
        saveUserData(username, password);
        showMessage("User registered successfully!", "green");
    } else {
        showMessage("Please enter both username and password!", "red");
    }
});

function saveUserData(username, password) {
    // Save the user data in localStorage in JSON format
    const users = JSON.parse(localStorage.getItem('users')) || {};
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
}

function showMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p style='color: ${color};'>${message}</p>`;
}
