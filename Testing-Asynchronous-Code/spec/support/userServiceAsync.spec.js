// userServiceAsync.spec.js
const fetchUserData = require('../../userServiceAsync');

describe('fetchUserData with async/await', () => {
    it('should return user data for a valid user ID', async () => {
        const user = await fetchUserData(1);
        expect(user).toEqual({ id: 1, name: 'John Doe' });
    });

    it('should return null for an invalid user ID', async () => {
        const user = await fetchUserData(3);
        expect(user).toBeNull();
    });
});
