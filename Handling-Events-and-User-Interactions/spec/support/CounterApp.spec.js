// counterApp.spec.js
describe('Counter App', () => {
    let counterApp;

    beforeEach(() => {
        // Setup the DOM elements
        document.body.innerHTML = `
            <div class="counter-container">
                <button id="decrementButton">-</button>
                <span class="counter-value" id="counterValue">0</span>
                <button id="incrementButton">+</button>
            </div>
        `;
    
        // Initialize the counterApp
        counterApp = require('../../CounterApp');
        counterApp.init();
    
        // Reset counterValue to ensure a clean state for each test
        counterApp.counterValue = 0;
        counterApp.counterValueElement.textContent = '0';  // Update the DOM element as well
    });
    

    it('should initialize the counter value to 0', () => {
        expect(counterApp.counterValue).toBe(0);
        expect(counterApp.counterValueElement.textContent).toBe('0');
    });

    it('should increment the counter value', () => {
        counterApp.incrementCounter();
        expect(counterApp.counterValue).toBe(1);
        expect(counterApp.counterValueElement.textContent).toBe('1');

        counterApp.incrementCounter();
        expect(counterApp.counterValue).toBe(2);
        expect(counterApp.counterValueElement.textContent).toBe('2'); // Fixed typo from textContext to textContent
    });

    it('should decrement the counter value', () => {
        counterApp.decrementCounter();
        expect(counterApp.counterValue).toBe(-1);
        expect(counterApp.counterValueElement.textContent).toBe('-1');

        counterApp.decrementCounter();
        expect(counterApp.counterValue).toBe(-2);
        expect(counterApp.counterValueElement.textContent).toBe('-2');
    });

    it('should handle button clicks', () => {
        // Spy on the increment and decrement methods
        spyOn(counterApp, 'incrementCounter');
        spyOn(counterApp, 'decrementCounter');

        // Simulate button clicks
        document.getElementById('incrementButton').click();
        expect(counterApp.incrementCounter).toHaveBeenCalled();

        document.getElementById('decrementButton').click();
        expect(counterApp.decrementCounter).toHaveBeenCalled();
    });
});
