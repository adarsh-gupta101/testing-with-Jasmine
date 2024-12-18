// userServiceAsync.spec.js
const fetchUserData = require('../../userServiceAsync');

describe("fetchUserData with async/await", () => {
  it("should return user data for a valid user ID", async () => {
    const user = await fetchUserData(1);
    expect(user).toEqual({ id: 1, name: "Adarsh Gupta", role: "Developer" });
  });

  it("should throw an error for an invalid user ID", async () => {
    await expectAsync(fetchUserData(3)).toBeRejectedWithError("User not found");
  });
});

