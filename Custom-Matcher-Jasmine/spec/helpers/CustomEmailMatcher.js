// spec/helpers/customMatchers.js
module.exports = {
  toBeCorporateEmail: function () {
    return {
      compare: function (actual, domain) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

       const pass = emailRegex.test(actual) && actual.endsWith(`@${domain}`);

        return {
          pass,
          message: pass
            ? `Expected "${actual}" not to be a valid email for domain "${domain}"`
            : `Expected "${actual}" to be a valid email for domain "${domain}"`,
        };
      },
    };
  },
};
