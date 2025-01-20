import { longestConsecutive } from '@code/LongestConsecutiveSequence';

describe('LongestConsecutiveSequence', () => {
    it('should find longest consecutive sequence', () => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
        expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 1])).toBe(9);
    });

    it('should handle empty array', () => {
        expect(longestConsecutive([])).toBe(0);
    });

    it('should handle array with single element', () => {
        expect(longestConsecutive([1])).toBe(1);
    });

    it('should handle array with duplicate elements', () => {
        expect(longestConsecutive([1, 2, 0, 1])).toBe(3);
        expect(longestConsecutive([1, 1, 1, 2, 3])).toBe(3);
    });

    it('should handle array with no consecutive sequences', () => {
        expect(longestConsecutive([2, 4, 6, 8])).toBe(1);
        expect(longestConsecutive([5, 10, 15, 20])).toBe(1);
    });

    it('should handle negative numbers', () => {
        expect(longestConsecutive([-5, -4, -3, -2, 0, 1])).toBe(4);
        expect(longestConsecutive([-2, -1, 1, 2])).toBe(2);
    });

    it('should handle multiple sequences of same length', () => {
        expect(longestConsecutive([1, 2, 3, 7, 8, 9])).toBe(3);
    });

    it('should handle large numbers', () => {
        expect(longestConsecutive([1000000, 1000001, 1000002])).toBe(3);
    });

    it('should handle non-sorted input', () => {
        expect(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -2, 6, 2])).toBe(12);
    });
});
