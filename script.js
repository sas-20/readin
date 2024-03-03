document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate sign up process (replace with actual logic)
        const email = signupForm.querySelector('#signup-email').value;
        const password = signupForm.querySelector('#signup-password').value;

        // Example of action (replace with your own)
        alert(Signing up with Email: ${email}, Password: ${password});
        // Add actual sign up logic here
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate login process (replace with actual logic)
        const email = loginForm.querySelector('#login-email').value;
        const password = loginForm.querySelector('#login-password').value;

        // Example of action (replace with your own)
        alert(Logging in with Email: ${email}, Password: ${password});
        // Add actual login logic here
    });
});
