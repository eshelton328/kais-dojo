import topKFrequent from '@code/TopKFrequentElements';

describe('TopKFrequentElements', () => {
    it('should return k most frequent elements', () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
        expect(topKFrequent([1], 1)).toEqual([1]);
    });

    it('should handle arrays with equal frequencies', () => {
        const result = topKFrequent([1, 1, 2, 2, 3, 3], 2);
        // Any two numbers are valid since all have same frequency
        expect(result.length).toBe(2);
        expect([1, 2, 3]).toContain(result[0]);
        expect([1, 2, 3]).toContain(result[1]);
        expect(result[0]).not.toBe(result[1]);
    });

    it('should handle negative numbers', () => {
        expect(topKFrequent([-1, -1, -2, -2, -2, 1], 2)).toEqual([-2, -1]);
        expect(topKFrequent([-1, -1, -1, -2], 1)).toEqual([-1]);
    });

    it('should handle arrays with all unique elements', () => {
        const result = topKFrequent([1, 2, 3, 4, 5], 3);
        expect(result.length).toBe(3);
        expect([1, 2, 3, 4, 5]).toContain(result[0]);
        expect([1, 2, 3, 4, 5]).toContain(result[1]);
        expect([1, 2, 3, 4, 5]).toContain(result[2]);
    });

    it('should handle arrays with all same elements', () => {
        expect(topKFrequent([1, 1, 1, 1], 1)).toEqual([1]);
        expect(topKFrequent([2, 2, 2, 2], 2)).toEqual([2]);
    });

    it('should handle k equal to array length', () => {
        expect(topKFrequent([1, 1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    it('should handle zero', () => {
        expect(topKFrequent([0, 0, 0, 1, 1, 2], 2)).toEqual([0, 1]);
        expect(topKFrequent([0], 1)).toEqual([0]);
    });
});
