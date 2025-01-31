import { dailyTemperatures } from '@code/DailyTemperatures';

describe('DailyTemperatures', () => {
    it('should handle basic test cases', () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
        expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
    });

    it('should handle array with single element', () => {
        expect(dailyTemperatures([73])).toEqual([0]);
    });

    it('should handle empty array', () => {
        expect(dailyTemperatures([])).toEqual([]);
    });

    it('should handle decreasing temperatures', () => {
        expect(dailyTemperatures([90, 80, 70, 60, 50])).toEqual([0, 0, 0, 0, 0]);
    });

    it('should handle increasing temperatures', () => {
        expect(dailyTemperatures([50, 60, 70, 80, 90])).toEqual([1, 1, 1, 1, 0]);
    });

    it('should handle same temperatures', () => {
        expect(dailyTemperatures([70, 70, 70, 70])).toEqual([0, 0, 0, 0]);
    });

    it('should handle fluctuating temperatures', () => {
        expect(dailyTemperatures([70, 65, 75, 70, 80, 65, 85])).toEqual([2, 1, 2, 1, 2, 1, 0]);
    });

    it('should handle extreme temperature differences', () => {
        expect(dailyTemperatures([30, 100, 31, 32])).toEqual([1, 0, 1, 0]);
    });

    it('should handle large arrays', () => {
        const temperatures = Array(10000).fill(70);
        const expected = Array(10000).fill(0);
        expect(dailyTemperatures(temperatures)).toEqual(expected);
    });

    it('should handle temperatures with delayed warmer days', () => {
        expect(dailyTemperatures([70, 69, 68, 67, 75])).toEqual([4, 3, 2, 1, 0]);
    });
});
