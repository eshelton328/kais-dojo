import { linearSearch } from '@code/LinearSearch';

describe('LinearSearch', () => {
    it('should find element in array', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(linearSearch([1, 3, 5, 7, 9], 7)).toBe(3);
    });

    it('should handle empty array', () => {
        expect(linearSearch([], 5)).toBe(-1);
    });

    it('should handle array with one element', () => {
        expect(linearSearch([1], 1)).toBe(0);
        expect(linearSearch([1], 2)).toBe(-1);
    });

    it('should handle element not in array', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
        expect(linearSearch([1, 3, 5, 7, 9], 4)).toBe(-1);
    });

    it('should handle negative numbers', () => {
        expect(linearSearch([-5, -3, -1, 0, 1], -3)).toBe(1);
        expect(linearSearch([-5, -3, -1, 0, 1], -4)).toBe(-1);
    });

    it('should handle duplicate elements', () => {
        // Should return index of first occurrence
        expect(linearSearch([1, 2, 2, 2, 3], 2)).toBe(1);
        expect(linearSearch([1, 1, 1, 1, 1], 1)).toBe(0);
    });

    it('should handle large numbers', () => {
        expect(linearSearch([1000000, 2000000, 3000000], 2000000)).toBe(1);
        expect(linearSearch([1000000, 2000000, 3000000], 1500000)).toBe(-1);
    });

    it('should handle elements at boundaries', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(linearSearch(arr, 1)).toBe(0); // First element
        expect(linearSearch(arr, 5)).toBe(4); // Last element
    });

    it('should handle unsorted arrays', () => {
        expect(linearSearch([5, 2, 8, 1, 9], 8)).toBe(2);
        expect(linearSearch([10, 5, 1, 8, 3], 5)).toBe(1);
    });
});
