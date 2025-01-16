import { mergeSort } from '@code/MergeSort';

describe('MergeSort', () => {
    it('should sort an array in ascending order', () => {
        expect(mergeSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
        expect(mergeSort([5, 2, 8, 1, 9])).toEqual([1, 2, 5, 8, 9]);
    });

    it('should handle empty array', () => {
        expect(mergeSort([])).toEqual([]);
    });

    it('should handle array with one element', () => {
        expect(mergeSort([1])).toEqual([1]);
    });

    it('should handle array with duplicate elements', () => {
        expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    it('should handle already sorted array', () => {
        expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle reverse sorted array', () => {
        expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle negative numbers', () => {
        expect(mergeSort([-3, -1, -4, -1, -5])).toEqual([-5, -4, -3, -1, -1]);
        expect(mergeSort([-1, 2, -3, 4, -5])).toEqual([-5, -3, -1, 2, 4]);
    });

    it('should handle array with all same elements', () => {
        expect(mergeSort([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2]);
    });

    it('should handle large numbers', () => {
        expect(mergeSort([1000000, 10, 500000, 1, 50000])).toEqual([1, 10, 50000, 500000, 1000000]);
    });
});
