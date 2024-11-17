const API = {
    async register(userData) {
        // Simulated API delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simple mock validation for demonstration purposes
                if (userData.username && userData.email && userData.password.length >= 6) {
                    resolve({ success: true });
                } else {
                    reject({ success: false });
                }
            }, 500);
        });
    }
};

module.exports = API;