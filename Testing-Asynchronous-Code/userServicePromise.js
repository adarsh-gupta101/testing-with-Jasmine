// userServicePromise.js
function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = {
                1: { id: 1, name: "Adarsh Gupta", role: "Developer" },
                2: { id: 2, name: "Nick Smith", role: "Tester" },
            };
            const user = users[userId] || null;
            resolve(user);
        }, 1000);
    });
}

module.exports = fetchUserData;
