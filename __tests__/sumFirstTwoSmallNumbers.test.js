import { expect, test } from '@jest/globals';
import sumFirstTwoSmallNumbers from '../src/helpers/sumFirstTwoSmallNumbers';

test('empty array', () => {
    expect(sumFirstTwoSmallNumbers([])).toBeNull();
});

test('not enough numbers', () => {
    expect(sumFirstTwoSmallNumbers([0])).toBeNull();
});

test('many numbers', () => {
    let array = [];
    for (let i = -100; i < 100; i += 1) {
        array.push(i);
    }
    expect(sumFirstTwoSmallNumbers(array)).toBe(-199);
});