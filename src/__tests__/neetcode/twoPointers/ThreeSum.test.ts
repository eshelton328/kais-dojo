import { threeSum } from '@code/ThreeSum';

describe('ThreeSum', () => {
    it('should find all unique triplets that sum to zero', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
            [-1, -1, 2],
            [-1, 0, 1],
        ]);
        expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
        expect(threeSum([-2, 0, 1, 1, 2])).toEqual([
            [-2, 0, 2],
            [-2, 1, 1],
        ]);
    });

    it('should handle empty input array', () => {
        expect(threeSum([])).toEqual([]);
    });

    it('should handle arrays with less than three elements', () => {
        expect(threeSum([0])).toEqual([]);
        expect(threeSum([1, -1])).toEqual([]);
    });

    it('should handle arrays with no solution', () => {
        expect(threeSum([1, 2, 3])).toEqual([]);
        expect(threeSum([-5, -4, -3])).toEqual([]);
        expect(threeSum([5, 4, 3, 2, 1])).toEqual([]);
    });

    it('should handle arrays with duplicates', () => {
        expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
        expect(threeSum([-1, -1, 2, 2, 0, 0, 1, 1])).toEqual([
            [-1, -1, 2],
            [-1, 0, 1],
        ]);
    });

    it('should handle arrays with mixed positive and negative numbers', () => {
        expect(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 6])).toEqual([
            [-4, -2, 6],
            [-4, 0, 4],
            [-4, 1, 3],
            [-4, 2, 2],
            [-2, -2, 4],
            [-2, 0, 2],
        ]);
    });

    it('should handle large input arrays efficiently', () => {
        expect(threeSum(Array(3000).fill(0))).toEqual([[0, 0, 0]]);
    });
});
