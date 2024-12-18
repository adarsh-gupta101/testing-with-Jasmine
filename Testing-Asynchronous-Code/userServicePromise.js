// userServicePromise.js

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      //  In real world, we use a database or an external API response with a delay
      const users = {
        1: { id: 1, name: "Adarsh Gupta", role: "Developer" },
        2: { id: 2, name: "Nick Smith", role: "Tester" },
      };
  
      setTimeout(() => {
        if (users[userId]) {
          resolve(users[userId]);
        } else {
          reject(new Error("User not found"));
        }
      }, 1000); // Simulating a delay of 1 second
    });
  }
  

module.exports = fetchUserData;
