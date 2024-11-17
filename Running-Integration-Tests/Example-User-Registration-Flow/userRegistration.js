const UserRegistration = {
    init() {
        this.form = document.getElementById('registrationForm');
        this.statusMessage = document.getElementById('statusMessage');

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.registerUser();
        });
    },

    async registerUser() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await API.register({ username, email, password });
            this.displayStatus(response.success ? "Registration successful!" : "Registration failed.");
        } catch (error) {
            this.displayStatus("An error occurred during registration.");
        }
    },

    displayStatus(message) {
        this.statusMessage.textContent = message;
    }
};

module.exports = UserRegistration; 
