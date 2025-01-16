import containsDuplicates from '@code/ContainsDuplicates';

describe('ContainsDuplicates', () => {
    it('should return true when array contains duplicates', () => {
        expect(containsDuplicates([1, 2, 3, 1])).toBe(true);
        expect(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });

    it('should return false when array contains no duplicates', () => {
        expect(containsDuplicates([1, 2, 3, 4])).toBe(false);
        expect(containsDuplicates([1])).toBe(false);
    });

    it('should handle empty arrays', () => {
        expect(containsDuplicates([])).toBe(false);
    });

    it('should handle arrays with negative numbers', () => {
        expect(containsDuplicates([-1, -1, 2, 3])).toBe(true);
        expect(containsDuplicates([-1, -2, -3])).toBe(false);
    });

    it('should handle arrays with mixed types of numbers', () => {
        expect(containsDuplicates([1.5, 1.5, 2, 3])).toBe(true);
        expect(containsDuplicates([1.1, 1.2, 1.3])).toBe(false);
    });
});
