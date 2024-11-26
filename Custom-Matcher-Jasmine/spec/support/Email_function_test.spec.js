describe("Corporate Email Validation", () => {
  it("should validate an email with the corporate domain", () => {
    expect("Adarsh@Lambdatest.com").toBeCorporateEmail("Lambdatest.com"); // Passes
  });

  it("should fail for an email with a different domain", () => {
    expect("Adarsh@gmail.com").not.toBeCorporateEmail("Lambdatest.com"); // Fails
  });

  it("should fail for an invalid email format", () => {
    expect("invalid-email@").not.toBeCorporateEmail("domain.com"); // Fails
  });
});
