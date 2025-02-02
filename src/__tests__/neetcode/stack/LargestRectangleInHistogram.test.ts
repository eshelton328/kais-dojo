import { largestRectangleArea } from '@code/LargestRectangleInHistogram';

describe('LargestRectangleInHistogram', () => {
    it('should handle basic test cases', () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
        expect(largestRectangleArea([2, 4])).toBe(4);
    });

    it('should handle empty array', () => {
        expect(largestRectangleArea([])).toBe(0);
    });

    it('should handle array with single element', () => {
        expect(largestRectangleArea([5])).toBe(5);
        expect(largestRectangleArea([0])).toBe(0);
    });

    it('should handle array with all same heights', () => {
        expect(largestRectangleArea([2, 2, 2, 2])).toBe(8);
        expect(largestRectangleArea([5, 5, 5])).toBe(15);
    });

    it('should handle ascending heights', () => {
        expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
        expect(largestRectangleArea([2, 3, 4, 5, 6])).toBe(12);
    });

    it('should handle descending heights', () => {
        expect(largestRectangleArea([5, 4, 3, 2, 1])).toBe(9);
        expect(largestRectangleArea([6, 5, 4, 3, 2])).toBe(12);
    });

    it('should handle array with zeros', () => {
        expect(largestRectangleArea([0, 2, 0])).toBe(2);
        expect(largestRectangleArea([2, 0, 2])).toBe(2);
        expect(largestRectangleArea([0, 0, 0])).toBe(0);
    });

    it('should handle large rectangles', () => {
        expect(largestRectangleArea([2, 1, 2])).toBe(3);
        expect(largestRectangleArea([1, 2, 2, 2, 1])).toBe(6);
    });

    it('should handle complex patterns', () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
        expect(largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3])).toBe(16);
    });

    it('should handle large numbers', () => {
        expect(largestRectangleArea([10000, 10000])).toBe(20000);
        expect(largestRectangleArea([1000, 1000, 1000, 1000])).toBe(4000);
    });

    it('should handle alternating patterns', () => {
        expect(largestRectangleArea([1, 3, 1, 3, 1])).toBe(5);
        expect(largestRectangleArea([2, 4, 2, 4, 2])).toBe(10);
    });
});
