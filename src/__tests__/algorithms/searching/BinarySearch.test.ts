import { binarySearch } from '@code/BinarySearch';

describe('BinarySearch', () => {
    it('should find element in sorted array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
    });

    it('should handle empty array', () => {
        expect(binarySearch([], 5)).toBe(-1);
    });

    it('should handle array with one element', () => {
        expect(binarySearch([1], 1)).toBe(0);
        expect(binarySearch([1], 2)).toBe(-1);
    });

    it('should handle element not in array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
        expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
    });

    it('should handle negative numbers', () => {
        expect(binarySearch([-5, -3, -1, 0, 1], -3)).toBe(1);
        expect(binarySearch([-5, -3, -1, 0, 1], -4)).toBe(-1);
    });

    it('should handle duplicate elements', () => {
        // Should return index of first occurrence
        expect(binarySearch([1, 2, 2, 2, 3], 2)).toBe(1);
        expect(binarySearch([1, 1, 1, 1, 1], 1)).toBe(0);
    });

    it('should handle large numbers', () => {
        expect(binarySearch([1000000, 2000000, 3000000], 2000000)).toBe(1);
        expect(binarySearch([1000000, 2000000, 3000000], 1500000)).toBe(-1);
    });

    it('should handle elements at boundaries', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(binarySearch(arr, 1)).toBe(0); // First element
        expect(binarySearch(arr, 5)).toBe(4); // Last element
    });

    it('should handle large arrays', () => {
        const largeArray = Array.from({length: 1000}, (_, i) => i * 2); // Even numbers 0 to 1998
        expect(binarySearch(largeArray, 998)).toBe(499);
        expect(binarySearch(largeArray, 999)).toBe(-1);
    });
});
