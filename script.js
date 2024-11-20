document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    
    const form = document.getElementById('registration-form');

    // Validate name
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    }

    // Validate email
    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }

    // Validate password
    function validatePassword() {
        if (passwordInput.value.trim().length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }

    // Event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    // Blur events to validate when the user leaves the input field
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);

    // Form submission event to prevent submission if there are errors
    form.addEventListener('submit', function (event) {
        validateName();
        validateEmail();
        validatePassword();

        // If any field is invalid, prevent form submission
        if (nameError.style.display === 'block' || emailError.style.display === 'block' || passwordError.style.display === 'block') {
            event.preventDefault();
            alert('Please correct the errors in the form.');
        }
    });
});
