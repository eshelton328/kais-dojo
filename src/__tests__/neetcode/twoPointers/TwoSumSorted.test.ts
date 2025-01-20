import { twoSumSorted } from '@code/TwoSumSorted';

describe('TwoSumSorted', () => {
    it('should find pair of numbers that add up to target', () => {
        expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSumSorted([2, 3, 4], 6)).toEqual([0, 2]);
        expect(twoSumSorted([-1, 0], -1)).toEqual([0, 1]);
    });

    it('should handle negative numbers', () => {
        expect(twoSumSorted([-5, -3, -2, -1], -4)).toEqual([1, 3]);
        expect(twoSumSorted([-2, 0, 2, 3, 7], 5)).toEqual([0, 4]);
    });

    it('should handle zero', () => {
        expect(twoSumSorted([-3, -2, 0, 0, 2], 0)).toEqual([1, 4]);
        expect(twoSumSorted([-1, 0, 1, 2], 0)).toEqual([0, 2]);
    });

    it('should handle large numbers', () => {
        expect(twoSumSorted([1000, 2000, 3000], 5000)).toEqual([1, 2]);
        expect(twoSumSorted([10000, 20000, 30000], 40000)).toEqual([0, 2]);
    });

    it('should return empty array when no solution exists', () => {
        expect(twoSumSorted([1, 2, 3, 4], 10)).toEqual([]);
        expect(twoSumSorted([1], 2)).toEqual([]);
        expect(twoSumSorted([], 5)).toEqual([]);
    });

    it('should handle numbers at array boundaries', () => {
        expect(twoSumSorted([1, 2, 3, 4, 5], 6)).toEqual([0, 4]);
        expect(twoSumSorted([2, 3, 4, 5, 6], 8)).toEqual([0, 4]);
    });

    it('should handle consecutive numbers', () => {
        expect(twoSumSorted([1, 2, 3, 4, 5], 7)).toEqual([1, 4]);
        expect(twoSumSorted([1, 2, 3, 4, 5], 9)).toEqual([3, 4]);
    });

    it('should handle evenly spaced numbers', () => {
        expect(twoSumSorted([2, 4, 6, 8, 10], 12)).toEqual([0, 4]);
        expect(twoSumSorted([5, 10, 15, 20, 25], 30)).toEqual([0, 4]);
    });
});
