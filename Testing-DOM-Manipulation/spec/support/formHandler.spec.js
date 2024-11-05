// formHandler.spec.js
describe('Form Handler', () => {
    let formHandler;
    
    // Setup DOM elements before each test
    beforeEach(() => {
        // Create the form structure
        document.body.innerHTML = `
            <form id="registrationForm">
                <input type="text" id="username">
                <span id="usernameError" class="error">Username must be at least 3 characters</span>
                
                <input type="email" id="email">
                <span id="emailError" class="error">Please enter a valid email</span>
                
                <input type="password" id="password">
                <span id="passwordError" class="error">Password must be at least 6 characters</span>
                
                <button type="submit">Register</button>
                
                <div id="successMessage" class="success">Registration successful!</div>
            </form>
        `;
        
        // Reset formHandler and initialize it
        formHandler = require('../../formHandler');
        formHandler.init();
    });

    describe('Form Validation', () => {
        it('should validate username length', () => {
            formHandler.usernameInput.value = 'ab';
            expect(formHandler.validateUsername()).toBe(false);
            expect(formHandler.usernameError.style.display).toBe('block');

            formHandler.usernameInput.value = 'abc';
            expect(formHandler.validateUsername()).toBe(true);
            expect(formHandler.usernameError.style.display).toBe('none');
        });

        it('should validate email format', () => {
            formHandler.emailInput.value = 'invalid-email';
            expect(formHandler.validateEmail()).toBe(false);
            expect(formHandler.emailError.style.display).toBe('block');

            formHandler.emailInput.value = 'test@example.com';
            expect(formHandler.validateEmail()).toBe(true);
            expect(formHandler.emailError.style.display).toBe('none');
        });

        it('should validate password length', () => {
            formHandler.passwordInput.value = '12345';
            expect(formHandler.validatePassword()).toBe(false);
            expect(formHandler.passwordError.style.display).toBe('block');

            formHandler.passwordInput.value = '123456';
            expect(formHandler.validatePassword()).toBe(true);
            expect(formHandler.passwordError.style.display).toBe('none');
        });
    });

    describe('Form Submission', () => {
        it('should handle valid form submission', (done) => {
            // Set valid values
            formHandler.usernameInput.value = 'testuser';
            formHandler.emailInput.value = 'test@example.com';
            formHandler.passwordInput.value = 'password123';

            // Spy on submitForm
            spyOn(formHandler, 'submitForm').and.callThrough();

            // Trigger form submission
            const submitEvent = new Event('submit');
            formHandler.form.dispatchEvent(submitEvent);

            expect(formHandler.submitForm).toHaveBeenCalled();

            // Check success message after timeout
            setTimeout(() => {
                expect(formHandler.successMessage.style.display).toBe('block');
                
                // Check if form was reset
                expect(formHandler.usernameInput.value).toBe('');
                expect(formHandler.emailInput.value).toBe('');
                expect(formHandler.passwordInput.value).toBe('');
                
                done();
            }, 1100);
        });

        it('should not submit with invalid data', () => {
            // Set invalid values
            formHandler.usernameInput.value = 'ab';
            formHandler.emailInput.value = 'invalid-email';
            formHandler.passwordInput.value = '12345';

            spyOn(formHandler, 'submitForm');

            // Trigger form submission
            const submitEvent = new Event('submit');
            formHandler.form.dispatchEvent(submitEvent);

            expect(formHandler.submitForm).not.toHaveBeenCalled();
        });
    });

    describe('Event Listeners', () => {
        it('should validate on input change', () => {
            spyOn(formHandler, 'validateUsername').and.callThrough();
            
            // Simulate input event
            const inputEvent = new Event('input');
            formHandler.usernameInput.dispatchEvent(inputEvent);

            expect(formHandler.validateUsername).toHaveBeenCalled();
        });
    });

    describe('Error Display', () => {
        it('should toggle error message visibility', () => {
            const element = document.createElement('div');
            
            formHandler.toggleError(element, true);
            expect(element.style.display).toBe('block');
            
            formHandler.toggleError(element, false);
            expect(element.style.display).toBe('none');
        });
    });
});