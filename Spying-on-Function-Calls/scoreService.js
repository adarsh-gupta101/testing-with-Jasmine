// // scoreService.js

// function fetchUserData(userId) {
//   // Imagine this calls an API to fetch user data based on ID
//   // For now, we’ll just return a dummy object

//   const user = [
//     { id: 1, points: 100 },
//     { id: 2, points: 200 },
//     { id: 3, points: 300 },
//   ];
//   return user.find((user) => user.id === userId);
// }

// function applyMultiplier(points, multiplier) {
//   // Multiplies the user’s points based on some criteria
//   return points * multiplier;
// }

// function calculateScore(userId, multiplier) {
//   const userData = fetchUserData(userId);
//   return applyMultiplier(userData.points, multiplier);
// }

// module.exports = { fetchUserData, applyMultiplier, calculateScore };


// scoreService.js
const scoreService = {
  fetchUserData(userId) {
      const user = [
          { id: 1, points: 100 },
          { id: 2, points: 200 },
          { id: 3, points: 300 },
      ];
      return user.find((user) => user.id === userId);
  },

  applyMultiplier(points, multiplier) {
      return points * multiplier;
  },

  calculateScore(userId, multiplier) {
      const userData = this.fetchUserData(userId);
      return this.applyMultiplier(userData.points, multiplier);
  }
};

module.exports = scoreService;