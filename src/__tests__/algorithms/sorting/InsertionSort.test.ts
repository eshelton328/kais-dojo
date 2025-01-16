import { insertionSort } from '@code/InsertionSort';

describe('InsertionSort', () => {
    it('should sort an array in ascending order', () => {
        expect(insertionSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
        expect(insertionSort([5, 2, 8, 1, 9])).toEqual([1, 2, 5, 8, 9]);
    });

    it('should handle empty array', () => {
        expect(insertionSort([])).toEqual([]);
    });

    it('should handle array with one element', () => {
        expect(insertionSort([1])).toEqual([1]);
    });

    it('should handle array with duplicate elements', () => {
        expect(insertionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    it('should handle already sorted array', () => {
        expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle reverse sorted array', () => {
        expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle negative numbers', () => {
        expect(insertionSort([-3, -1, -4, -1, -5])).toEqual([-5, -4, -3, -1, -1]);
        expect(insertionSort([-1, 2, -3, 4, -5])).toEqual([-5, -3, -1, 2, 4]);
    });

    it('should handle array with all same elements', () => {
        expect(insertionSort([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2]);
    });

    it('should handle large numbers', () => {
        expect(insertionSort([1000000, 10, 500000, 1, 50000])).toEqual([1, 10, 50000, 500000, 1000000]);
    });

    it('should handle alternating numbers', () => {
        expect(insertionSort([1, -1, 2, -2, 3, -3])).toEqual([-3, -2, -1, 1, 2, 3]);
    });
});
