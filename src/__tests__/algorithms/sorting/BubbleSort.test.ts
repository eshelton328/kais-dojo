import { bubbleSort } from '@code/BubbleSort';

describe('BubbleSort', () => {
    it('should sort an array in ascending order', () => {
        const arr1 = [64, 34, 25, 12, 22, 11, 90];
        bubbleSort(arr1);
        expect(arr1).toEqual([11, 12, 22, 25, 34, 64, 90]);

        const arr2 = [5, 2, 8, 1, 9];
        bubbleSort(arr2);
        expect(arr2).toEqual([1, 2, 5, 8, 9]);
    });

    it('should handle empty array', () => {
        const arr: number[] = [];
        bubbleSort(arr);
        expect(arr).toEqual([]);
    });

    it('should handle array with one element', () => {
        const arr = [1];
        bubbleSort(arr);
        expect(arr).toEqual([1]);
    });

    it('should handle array with duplicate elements', () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        bubbleSort(arr);
        expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    it('should handle already sorted array', () => {
        const arr = [1, 2, 3, 4, 5];
        bubbleSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle reverse sorted array', () => {
        const arr = [5, 4, 3, 2, 1];
        bubbleSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle negative numbers', () => {
        const arr1 = [-3, -1, -4, -1, -5];
        bubbleSort(arr1);
        expect(arr1).toEqual([-5, -4, -3, -1, -1]);

        const arr2 = [-1, 2, -3, 4, -5];
        bubbleSort(arr2);
        expect(arr2).toEqual([-5, -3, -1, 2, 4]);
    });

    it('should handle array with all same elements', () => {
        const arr = [2, 2, 2, 2, 2];
        bubbleSort(arr);
        expect(arr).toEqual([2, 2, 2, 2, 2]);
    });

    it('should handle large numbers', () => {
        const arr = [1000000, 10, 500000, 1, 50000];
        bubbleSort(arr);
        expect(arr).toEqual([1, 10, 50000, 500000, 1000000]);
    });

    it('should handle alternating numbers', () => {
        const arr = [1, -1, 2, -2, 3, -3];
        bubbleSort(arr);
        expect(arr).toEqual([-3, -2, -1, 1, 2, 3]);
    });
});
