import { trap } from '@code/TrappingRainWaterTP';

describe('TrappingRainWaterTP', () => {
    it('should calculate trapped water for standard cases', () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
        expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    });

    it('should handle cases with no trapped water', () => {
        expect(trap([1, 1, 1, 1])).toBe(0);
        expect(trap([0, 0, 0, 0])).toBe(0);
    });

    it('should handle cases with increasing heights', () => {
        expect(trap([1, 2, 3, 4, 5])).toBe(0);
    });

    it('should handle cases with decreasing heights', () => {
        expect(trap([5, 4, 3, 2, 1])).toBe(0);
    });

    it('should handle single bar and empty array', () => {
        expect(trap([1])).toBe(0);
        expect(trap([])).toBe(0);
    });

    it('should handle large input arrays', () => {
        const heights = Array.from({ length: 10000 }, (_, i) => (i % 2 === 0 ? 1 : 0));
        expect(trap(heights)).toBe(4999);
    });

    it('should handle complex cases', () => {
        expect(trap([3, 0, 2, 0, 4])).toBe(7);
        expect(trap([0, 2, 0, 2, 0, 2])).toBe(4);
    });
});
