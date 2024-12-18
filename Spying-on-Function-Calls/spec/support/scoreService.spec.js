// // // // scoreService.spec.js

// // // const scoreService = require('../../scoreService');

// // // describe('calculateScore with spy configurations', () => {
// // //     let userId, multiplier;

// // //     beforeEach(() => {
// // //         userId = 1;
// // //         multiplier = 2;
// // //     });

// // //     it('should call the actual fetchUserData function', () => {
// // //         spyOn(scoreService, 'fetchUserData').and.callThrough();
// // //         spyOn(scoreService, 'applyMultiplier').and.callThrough();

// // //         const result = scoreService.calculateScore(userId, multiplier);

// // //         expect(scoreService.fetchUserData).toHaveBeenCalled();
// // //         expect(scoreService.fetchUserData).toHaveBeenCalledWith(userId);
// // //         expect(result).toEqual(200); // 100 points * 2 multiplier
// // //     });

// // //     it('should return a fake user data object from fetchUserData', () => {
// // //         spyOn(scoreService, 'fetchUserData').and.returnValue({ id: userId, points: 50 });
// // //         spyOn(scoreService, 'applyMultiplier').and.callThrough();

// // //         const result = scoreService.calculateScore(userId, multiplier);

// // //         expect(scoreService.fetchUserData).toHaveBeenCalled();
// // //         expect(scoreService.fetchUserData).toHaveBeenCalledWith(userId);
// // //         expect(result).toEqual(100); // 50 points * 2 multiplier
// // //     });

// // //     it('should call a fake implementation of applyMultiplier', () => {
// // //         spyOn(scoreService, 'fetchUserData').and.returnValue({ id: userId, points: 100 });
// // //         spyOn(scoreService, 'applyMultiplier').and.callFake((points, multiplier) => points + multiplier);

// // //         const result = scoreService.calculateScore(userId, multiplier);

// // //         expect(scoreService.applyMultiplier).toHaveBeenCalled();
// // //         expect(scoreService.applyMultiplier).toHaveBeenCalledWith(100, multiplier);
// // //         expect(result).toEqual(102); // 100 points + 2 multiplier
// // //     });
// // // });

// // // Import the scoreService functions
// // const scoreService = require('../../scoreService');

// // describe('calculateScore with spy configurations', () => {
// //     let userId, multiplier;

// //     beforeEach(() => {
// //         userId = 1;
// //         multiplier = 2;
// //     });

// //     afterEach(() => {
// //         // Clean up all spies after each test
// //         jasmine.restoreAllSpies();
// //     });

// //     // Wrapper function to call `calculateScore`
// //     function callCalculateScore() {
// //         return scoreService.calculateScore(userId, multiplier);
// //     }

// //     it('should call the actual fetchUserData function', () => {
// //         spyOn(scoreService, 'fetchUserData').and.callThrough();
// //         spyOn(scoreService, 'applyMultiplier').and.callThrough();

// //         const result = callCalculateScore();

// //         expect(scoreService.fetchUserData).toHaveBeenCalled();
// //         expect(scoreService.fetchUserData).toHaveBeenCalledWith(userId);
// //         expect(result).toEqual(200); // 100 points * 2 multiplier
// //     });

// //     it('should return a fake user data object from fetchUserData', () => {
// //         spyOn(scoreService, 'fetchUserData').and.returnValue({ id: userId, points: 50 });
// //         spyOn(scoreService, 'applyMultiplier').and.callThrough();

// //         const result = callCalculateScore();

// //         expect(scoreService.fetchUserData).toHaveBeenCalled();
// //         expect(scoreService.fetchUserData).toHaveBeenCalledWith(userId);
// //         expect(result).toEqual(100); // 50 points * 2 multiplier
// //     });

// //     it('should call a fake implementation of applyMultiplier', () => {
// //         spyOn(scoreService, 'fetchUserData').and.returnValue({ id: userId, points: 100 });
// //         spyOn(scoreService, 'applyMultiplier').and.callFake((points, multiplier) => points + multiplier);

// //         const result = callCalculateScore();

// //         expect(scoreService.applyMultiplier).toHaveBeenCalled();
// //         expect(scoreService.applyMultiplier).toHaveBeenCalledWith(100, multiplier);
// //         expect(result).toEqual(102); // 100 points + 2 multiplier
// //     });
// // });


// const scoreService = require('../../scoreService');

// describe('calculateScore with spy configurations', () => {
//     let userId, multiplier;

//     beforeEach(() => {
//         userId = 1;
//         multiplier = 2;
//     });

//     // Remove the afterEach block with restoreAllSpies

//     it('should call the actual fetchUserData function', () => {
//         const fetchSpy = spyOn(scoreService, 'fetchUserData').and.callThrough();
//         const multiplierSpy = spyOn(scoreService, 'applyMultiplier').and.callThrough();

//         const result = scoreService.calculateScore(userId, multiplier);

//         expect(fetchSpy).toHaveBeenCalled();
//         expect(fetchSpy).toHaveBeenCalledWith(userId);
//         expect(result).toEqual(200); // 100 points * 2 multiplier
//     });

//     it('should return a fake user data object from fetchUserData', () => {
//         const fetchSpy = spyOn(scoreService, 'fetchUserData').and.returnValue({ id: userId, points: 50 });
//         const multiplierSpy = spyOn(scoreService, 'applyMultiplier').and.callThrough();

//         const result = scoreService.calculateScore(userId, multiplier);

//         expect(fetchSpy).toHaveBeenCalled();
//         expect(fetchSpy).toHaveBeenCalledWith(userId);
//         expect(result).toEqual(100); // 50 points * 2 multiplier
//     });

//     it('should call a fake implementation of applyMultiplier', () => {
//         const fetchSpy = spyOn(scoreService, 'fetchUserData').and.returnValue({ id: userId, points: 100 });
//         const multiplierSpy = spyOn(scoreService, 'applyMultiplier').and.callFake((points, multiplier) => points + multiplier);

//         const result = scoreService.calculateScore(userId, multiplier);

//         expect(multiplierSpy).toHaveBeenCalled();
//         expect(multiplierSpy).toHaveBeenCalledWith(100, multiplier);
//         expect(result).toEqual(102); // 100 points + 2 multiplier
//     });
// });



// scoreService.spec.js
const scoreService = require('../../scoreService');

describe('calculateScore with spy configurations', () => {
    let userId, multiplier;

    beforeEach(() => {
        userId = 1;
        multiplier = 2;
    });

    it('should call the actual fetchUserData function', () => {
        // Create spies before the function call
        const fetchDataSpy = spyOn(scoreService, 'fetchUserData').and.callThrough();
        const applyMultiplierSpy = spyOn(scoreService, 'applyMultiplier').and.callThrough();

        // Call the function
        const result = scoreService.calculateScore(userId, multiplier);

        // Verify the spies and result
        expect(fetchDataSpy).toHaveBeenCalledWith(userId);
        expect(applyMultiplierSpy).toHaveBeenCalledWith(100, multiplier);
        expect(result).toBe(200); // 100 points * 2 multiplier
    });

    it('should return a fake user data object from fetchUserData', () => {
        // Setup spies with fake return value
        spyOn(scoreService, 'fetchUserData').and.returnValue({ id: userId, points: 50 });
        spyOn(scoreService, 'applyMultiplier').and.callThrough();

        // Call the function
        const result = scoreService.calculateScore(userId, multiplier);

        // Verify the result
        expect(result).toBe(100); // 50 points * 2 multiplier
    });

    it('should call a fake implementation of applyMultiplier', () => {
        // Setup spies with fake implementations
        spyOn(scoreService, 'fetchUserData').and.returnValue({ id: userId, points: 100 });
        const multiplierSpy = spyOn(scoreService, 'applyMultiplier')
            .and.callFake((points, mult) => points + mult);

        // Call the function
        const result = scoreService.calculateScore(userId, multiplier);

        // Verify the spy was called with correct arguments and returned expected result
        expect(multiplierSpy).toHaveBeenCalledWith(100, multiplier);
        expect(result).toBe(102); // 100 points + 2 multiplier
    });
});



// spyOn(myObject, 'myMethod');

