// userServiceAsync.js
function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = {
                1: { id: 1, name: 'John Doe' },
                2: { id: 2, name: 'Jane Smith' },
            };
            const user = users[userId] || null;
            resolve(user);
        }, 1000);
    });
}

module.exports = fetchUserData;
