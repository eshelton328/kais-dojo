import { maxArea } from '@code/ContainerWithMostWater';

describe('MaxArea', () => {
    it('should calculate the maximum area for a standard case', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
        expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    });

    it('should handle cases with two heights', () => {
        expect(maxArea([1, 2])).toBe(1);
        expect(maxArea([2, 2])).toBe(2);
    });

    it('should handle cases with all heights being the same', () => {
        expect(maxArea([5, 5, 5, 5, 5])).toBe(20);
        expect(maxArea([10, 10, 10, 10, 10])).toBe(40);
    });

    it('should handle cases with increasing heights', () => {
        expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
        expect(maxArea([1, 3, 5, 7, 9])).toBe(10);
    });

    it('should handle cases with decreasing heights', () => {
        expect(maxArea([9, 7, 5, 3, 1])).toBe(10);
        expect(maxArea([10, 8, 6, 4, 2])).toBe(12);
    });

    it('should handle a single height', () => {
        expect(maxArea([10])).toBe(0);
        expect(maxArea([1])).toBe(0);
    });

    it('should handle an empty array', () => {
        expect(maxArea([])).toBe(0);
    });

    it('should handle large input arrays', () => {
        const heights = Array.from({ length: 10000 }, (_, i) => i + 1);
        expect(maxArea(heights)).toBe(25000000);
    });

    it('should handle cases with zero height', () => {
        expect(maxArea([0, 1, 0, 2, 0, 3])).toBe(4);
        expect(maxArea([0, 0, 0, 0, 0])).toBe(0);
    });
});
