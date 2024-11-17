describe('User Registration Flow', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <form id="registrationForm">
                    <label for="username">Username:</label>
                    <input type="text" id="username" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" required />

                    <label for="password">Password:</label>
                    <input type="password" id="password" required />

                    <button type="submit">Register</button>
                </form>
                <div id="statusMessage"></div>
            </div>
        `;
        UserRegistration = require('../../Example-User-Registration-Flow/userRegistration.js');
        UserRegistration.init();
        API = require('../../Example-User-Registration-Flow/API.js');
    });

    it('should display a success message when registration is successful', async () => {
        spyOn(API, 'register').and.returnValue(Promise.resolve({ success: true }));

        document.getElementById('username').value = "testuser";
        document.getElementById('email').value = "test@example.com";
        document.getElementById('password').value = "password123";

        document.getElementById('registrationForm').dispatchEvent(new Event('submit'));

        await new Promise(resolve => setTimeout(resolve, 600));

        const statusMessage = document.getElementById('statusMessage').textContent;
        expect(statusMessage).toBe("Registration successful!");
    });

    it('should display an error message when registration fails', async () => {
        spyOn(API, 'register').and.returnValue(Promise.reject({ success: false }));

        document.getElementById('username').value = "testuser";
        document.getElementById('email').value = "test@example.com";
        document.getElementById('password').value = "123"; // too short

        document.getElementById('registrationForm').dispatchEvent(new Event('submit'));

        await new Promise(resolve => setTimeout(resolve, 600));

        const statusMessage = document.getElementById('statusMessage').textContent;
        expect(statusMessage).toBe("An error occurred during registration.");
    });
});
