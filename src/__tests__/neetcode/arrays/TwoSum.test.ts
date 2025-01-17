import { twoSum } from '@code/TwoSum';

describe('TwoSum', () => {
    it('should find first pair of numbers that add up to target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    it('should handle negative numbers', () => {
        expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
        expect(twoSum([5, -9, 8, -2, 7], -11)).toEqual([1, 3]);
    });

    it('should handle zero', () => {
        expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
        expect(twoSum([-5, 0, 8, 2, 0], 0)).toEqual([1, 4]);
    });

    it('should handle large numbers', () => {
        expect(twoSum([1000000, 2000000, 3000000], 5000000)).toEqual([1, 2]);
    });

    it('should return empty array when no solution exists', () => {
        expect(twoSum([1, 2, 3, 4], 10)).toEqual([]);
        expect(twoSum([1], 2)).toEqual([]);
        expect(twoSum([], 5)).toEqual([]);
    });

    it('should not use the same element twice', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum([5, 5], 10)).toEqual([0, 1]);
    });
});
