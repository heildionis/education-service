import { generateRandomNumber } from './generateRandomNumber';

describe('getRandomNumber.test', () => {
    test('to be called and no undefined', () => {
        expect(generateRandomNumber()).not.toBeUndefined();
        expect(generateRandomNumber()).not.toBeNaN();
        expect(generateRandomNumber()).not.toBeNull();
    });
});
//
