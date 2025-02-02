import { maxProfit } from '@code/BestTimeToBuyAndSellStock';

describe('BestTimeToBuyAndSellStock', () => {
    it('should handle basic cases', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    it('should handle empty array and single element', () => {
        expect(maxProfit([])).toBe(0);
        expect(maxProfit([1])).toBe(0);
    });

    it('should handle array with all same prices', () => {
        expect(maxProfit([5, 5, 5, 5, 5])).toBe(0);
    });

    it('should handle strictly increasing prices', () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    });

    it('should handle strictly decreasing prices', () => {
        expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
    });

    it('should handle large price differences', () => {
        expect(maxProfit([1, 999])).toBe(998);
        expect(maxProfit([999, 1])).toBe(0);
    });

    it('should handle multiple peaks and valleys', () => {
        expect(maxProfit([3, 2, 6, 1, 2, 5, 4])).toBe(4);
        expect(maxProfit([8, 2, 5, 1, 7, 3, 6])).toBe(6);
    });

    it('should handle prices with repeated values', () => {
        expect(maxProfit([2, 2, 5, 1, 1, 2, 4])).toBe(3);
        expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(4);
    });

    it('should handle large arrays', () => {
        const prices = Array.from({ length: 10000 }, (_, i) => i);
        expect(maxProfit(prices)).toBe(9999);

        const descendingPrices = Array.from({ length: 10000 }, (_, i) => 10000 - i);
        expect(maxProfit(descendingPrices)).toBe(0);
    });
});
