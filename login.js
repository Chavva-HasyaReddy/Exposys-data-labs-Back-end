document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check credentials
    verifyCredentials(username, password);
});

function verifyCredentials(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const storedPassword = users[username];

    if (storedPassword && storedPassword === password) {
        showMessage("Login successful! Redirecting...", "green");
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        showMessage("Invalid credentials!", "red");
    }
}

function showMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p style='color: ${color};'>${message}</p>`;
}
