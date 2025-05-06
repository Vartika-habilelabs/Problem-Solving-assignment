document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('errorMessage');
    
    loginForm.addEventListener('submit', function(e) {
        // Reset error message
        errorMessage.style.visibility = 'hidden';
        errorMessage.textContent = '';
        
        // Check if passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            e.preventDefault();
            errorMessage.textContent = 'Passwords do not match!';
            errorMessage.style.visibility = 'visible';
            return false;
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            e.preventDefault();
            errorMessage.textContent = 'Please enter a valid email address!';
            errorMessage.style.visibility = 'visible';
            return false;
        }
        
        // Validate password length
        if (passwordInput.value.length < 8) {
            e.preventDefault();
            errorMessage.textContent = 'Password must be at least 8 characters long!';
            errorMessage.style.visibility = 'visible';
            return false;
        }
        
        // If everything is valid, form will submit
        // In a real application, you would handle form submission via AJAX
        // and process authentication on the server side
        e.preventDefault();
        
        // For demonstration purposes:
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.visibility = 'visible';
        
        console.log('Form submitted with:', {
            email: emailInput.value,
            password: passwordInput.value
        });
    });
    
    // Clear error message when user starts typing
    [emailInput, passwordInput, confirmPasswordInput].forEach(input => {
        input.addEventListener('input', function() {
            errorMessage.style.visibility = 'hidden';
        });
    });
});