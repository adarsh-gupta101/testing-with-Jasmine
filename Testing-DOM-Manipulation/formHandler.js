// formHandler.js
const formHandler = {
    init() {
        this.form = document.getElementById('registrationForm');
        this.usernameInput = document.getElementById('username');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        
        this.usernameError = document.getElementById('usernameError');
        this.emailError = document.getElementById('emailError');
        this.passwordError = document.getElementById('passwordError');
        this.successMessage = document.getElementById('successMessage');
        
        this.setupEventListeners();
    },

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.usernameInput.addEventListener('input', () => this.validateUsername());
        this.emailInput.addEventListener('input', () => this.validateEmail());
        this.passwordInput.addEventListener('input', () => this.validatePassword());
    },

    validateUsername() {
        const isValid = this.usernameInput.value.length >= 3;
        this.toggleError(this.usernameError, !isValid);
        return isValid;
    },

    validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(this.emailInput.value);
        this.toggleError(this.emailError, !isValid);
        return isValid;
    },

    validatePassword() {
        const isValid = this.passwordInput.value.length >= 6;
        this.toggleError(this.passwordError, !isValid);
        return isValid;
    },

    toggleError(element, show) {
        element.style.display = show ? 'block' : 'none';
    },

    handleSubmit(e) {
        e.preventDefault();
        
        const isUsernameValid = this.validateUsername();
        const isEmailValid = this.validateEmail();
        const isPasswordValid = this.validatePassword();
        
        if (isUsernameValid && isEmailValid && isPasswordValid) {
            this.submitForm();
        }
    },

    submitForm() {
        // Simulate API call
        setTimeout(() => {
            this.showSuccess();
            this.resetForm();
        }, 1000);
    },

    showSuccess() {
        this.successMessage.style.display = 'block';
        setTimeout(() => {
            this.successMessage.style.display = 'none';
        }, 3000);
    },

    resetForm() {
        this.form.reset();
    }
};

// Initialize the form handler when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => formHandler.init());

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = formHandler;
}