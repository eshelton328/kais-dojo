import { lengthOfLongestSubstring } from '@code/LongestSubstringWithoutRepeatingCharacters';

describe('LongestSubstringWithoutRepeatingCharacters', () => {
    it('should handle basic test cases', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });

    it('should handle empty string', () => {
        expect(lengthOfLongestSubstring('')).toBe(0);
    });

    it('should handle single character', () => {
        expect(lengthOfLongestSubstring('a')).toBe(1);
        expect(lengthOfLongestSubstring(' ')).toBe(1);
    });

    it('should handle string with all unique characters', () => {
        expect(lengthOfLongestSubstring('abcdef')).toBe(6);
        expect(lengthOfLongestSubstring('123456')).toBe(6);
    });

    it('should handle string with all same characters', () => {
        expect(lengthOfLongestSubstring('aaaaa')).toBe(1);
        expect(lengthOfLongestSubstring('11111')).toBe(1);
    });

    it('should handle special characters and spaces', () => {
        expect(lengthOfLongestSubstring('!@#$%')).toBe(5);
        expect(lengthOfLongestSubstring('a b c')).toBe(3);
        expect(lengthOfLongestSubstring('a!b@c#')).toBe(6);
    });

    it('should handle numeric strings', () => {
        expect(lengthOfLongestSubstring('12345321')).toBe(5);
        expect(lengthOfLongestSubstring('11223344')).toBe(2);
    });

    it('should handle alternating patterns', () => {
        expect(lengthOfLongestSubstring('ababab')).toBe(2);
        expect(lengthOfLongestSubstring('a1a1a1')).toBe(2);
    });

    it('should handle complex patterns', () => {
        expect(lengthOfLongestSubstring('abba')).toBe(2);
        expect(lengthOfLongestSubstring('dvdf')).toBe(3);
        expect(lengthOfLongestSubstring('anviaj')).toBe(5);
    });

    it('should handle unicode characters', () => {
        expect(lengthOfLongestSubstring('😀😃😄😁')).toBe(4);
        expect(lengthOfLongestSubstring('你好世界')).toBe(4);
    });

    it('should handle long strings', () => {
        const longString = 'a'.repeat(5000) + 'b'.repeat(5000);
        expect(lengthOfLongestSubstring(longString)).toBe(2);
    });
});
