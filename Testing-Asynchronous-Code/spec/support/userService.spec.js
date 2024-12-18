// userService.spec.js
const fetchUserData = require("../../userService");

describe("fetchUserData", () => {
  it("should return user data for a valid user ID", (done) => {
    fetchUserData(1, (user) => {
      expect(user).toEqual({ id: 1, name: "Adarsh Gupta", role: "Developer" });
      done(); // Indicate that the asynchronous test is complete
    });
  });

  it("should return null for an invalid user ID", (done) => {
    fetchUserData("adarsh", (user) => {
      expect(user).toBeNull();
      done();
    });
  });
});
