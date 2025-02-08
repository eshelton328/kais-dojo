import { characterReplacement } from '@code/LongestRepeatingCharacterReplacement';

describe('LongestRepeatingCharacterReplacement', () => {
    it('should handle basic cases', () => {
        expect(characterReplacement('AABABBA', 1)).toBe(4);
        expect(characterReplacement('ABAB', 2)).toBe(4);
    });

    it('should handle empty string', () => {
        expect(characterReplacement('', 1)).toBe(0);
    });

    it('should handle single character strings', () => {
        expect(characterReplacement('A', 0)).toBe(1);
        expect(characterReplacement('A', 1)).toBe(1);
    });

    it('should handle cases where k equals string length', () => {
        expect(characterReplacement('ABC', 3)).toBe(3);
        expect(characterReplacement('ABCD', 4)).toBe(4);
    });

    it('should handle cases where no replacements are needed', () => {
        expect(characterReplacement('AAAA', 0)).toBe(4);
        expect(characterReplacement('BBBB', 1)).toBe(4);
    });

    it('should handle cases with multiple possible replacements', () => {
        expect(characterReplacement('AABACCC', 2)).toBe(5);
        expect(characterReplacement('AABBBCC', 1)).toBe(4);
    });

    it('should handle cases with mixed characters', () => {
        expect(characterReplacement('ABABBAAC', 2)).toBe(5);
        expect(characterReplacement('ABCDEFGH', 3)).toBe(4);
    });

    it('should handle cases with k = 0', () => {
        expect(characterReplacement('AABBBCC', 0)).toBe(3);
        expect(characterReplacement('ABCDE', 0)).toBe(1);
    });

    it('should handle large strings', () => {
        const largeString = 'A'.repeat(10000) + 'B'.repeat(10000);
        expect(characterReplacement(largeString, 10000)).toBe(20000);
    });

    it('should handle cases with special characters and numbers', () => {
        expect(characterReplacement('A1B2C3D4', 2)).toBe(3);
        expect(characterReplacement('!@#$%^&*()', 3)).toBe(4);
    });

    it('should handle cases with unicode characters', () => {
        expect(characterReplacement('你好世界', 1)).toBe(2);
        expect(characterReplacement('😀😃😄😁', 2)).toBe(3);
    });

    it('should handle cases where k is larger than needed', () => {
        expect(characterReplacement('AABBB', 10)).toBe(5);
        expect(characterReplacement('ABCD', 100)).toBe(4);
    });
});
