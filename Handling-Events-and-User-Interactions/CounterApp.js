// counterApp.js
const counterApp = {
    counterValue: 0,

    init() {
        this.counterValueElement = document.getElementById('counterValue');
        this.decrementButton = document.getElementById('decrementButton');
        this.incrementButton = document.getElementById('incrementButton');

        this.setupEventListeners();
    },

    setupEventListeners() {
        this.decrementButton.addEventListener('click', () => this.decrementCounter());
        this.incrementButton.addEventListener('click', () => this.incrementCounter());
    },

    decrementCounter() {
        this.updateCounter(-1);
    },

    incrementCounter() {
        this.updateCounter(1);
    },

    updateCounter(value) {
        this.counterValue += value;
        this.counterValueElement.textContent = this.counterValue;
    }
};

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => counterApp.init());

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = counterApp;
}