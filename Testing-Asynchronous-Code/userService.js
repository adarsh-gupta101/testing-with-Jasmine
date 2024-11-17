// Here we will just mimic the actual implementation of fetching user data from an api for simplicity

function fetchCustomUserData(userId, callback) {
  setTimeout(() => {
    const users = {
      1: {
        id: 1,
        name: "Adarsh Gupta",
        role: "Developer",
      },
      2: {
        id: 2,
        name: "Nick Smith",
        role: "Tester",
      },
    };

    const user=users[userId] || null;
    callback(user);
  },1000);
}

module.exports = fetchCustomUserData