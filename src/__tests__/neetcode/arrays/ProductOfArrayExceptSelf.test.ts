import { productExceptSelf } from '@code/ProductOfArrayExceptSelf';

describe('ProductOfArrayExceptSelf', () => {
    // Helper function to normalize zeros
    const normalizeZeros = (arr: number[]) =>
        arr.map(n => Object.is(n, -0) ? 0 : n);

    it('should return product of all elements except self', () => {
        expect(normalizeZeros(productExceptSelf([1, 2, 3, 4]))).toEqual([24, 12, 8, 6]);
        expect(normalizeZeros(productExceptSelf([-1, 1, 0, -3, 3]))).toEqual([0, 0, 9, 0, 0]);
    });

    it('should handle array with single element', () => {
        expect(normalizeZeros(productExceptSelf([5]))).toEqual([1]);
    });

    it('should handle array with two elements', () => {
        expect(normalizeZeros(productExceptSelf([2, 3]))).toEqual([3, 2]);
    });

    it('should handle array with zeros', () => {
        expect(normalizeZeros(productExceptSelf([0, 2, 3]))).toEqual([6, 0, 0]);
        expect(normalizeZeros(productExceptSelf([0, 0, 3]))).toEqual([0, 0, 0]);
    });

    it('should handle array with negative numbers', () => {
        expect(normalizeZeros(productExceptSelf([-2, -3, 4, -5]))).toEqual([60, 40, -30, 24]);
    });

    it('should handle array with ones', () => {
        expect(normalizeZeros(productExceptSelf([1, 1, 1, 1]))).toEqual([1, 1, 1, 1]);
    });

    it('should handle large numbers', () => {
        expect(normalizeZeros(productExceptSelf([1000, 2000, 3000]))).toEqual([6000000, 3000000, 2000000]);
    });
});
