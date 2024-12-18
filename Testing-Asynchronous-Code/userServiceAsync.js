// userServiceAsync.js
async function fetchUserData(userId) {
    const users = {
      1: { id: 1, name: "Adarsh Gupta", role: "Developer" },
      2: { id: 2, name: "Nick Smith", role: "Tester" },
    };
  
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  
    if (users[userId]) {
      return users[userId];
    } else {
      throw new Error("User not found");
    }
  }
  
  module.exports = fetchUserData;
  
