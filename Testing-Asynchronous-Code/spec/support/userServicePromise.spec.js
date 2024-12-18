// userServicePromise.spec.js
const fetchUserData = require('../../userServicePromise');

describe('fetchUserData with Promises', () => {
    it('should return user data for a valid user ID', () => {
        return fetchUserData(1).then(user => {
            expect(user).toEqual({ id: 1, name: 'Adarsh Gupta', role: 'Developer' });
        });
    });

    it('should return an error for an invalid user ID', () => {
        return fetchUserData(3).catch(error => {
            expect(error).toEqual(new Error('User not found'));
        });
    });
});




