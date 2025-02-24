import { longestPalindrome } from '@code/LongestPalindromicSubstring';

describe('LongestPalindromicSubstring', () => {
    it('should handle basic palindromes', () => {
        expect(longestPalindrome('babad')).toBe('bab');
        expect(longestPalindrome('cbbd')).toBe('bb');
    });

    it('should handle single character strings', () => {
        expect(longestPalindrome('a')).toBe('a');
        expect(longestPalindrome('z')).toBe('z');
    });

    it('should handle empty string', () => {
        expect(longestPalindrome('')).toBe('');
    });

    it('should handle strings with all same characters', () => {
        expect(longestPalindrome('aaaaa')).toBe('aaaaa');
        expect(longestPalindrome('zzzzz')).toBe('zzzzz');
    });

    it('should handle even length palindromes', () => {
        expect(longestPalindrome('abba')).toBe('abba');
        expect(longestPalindrome('abccba')).toBe('abccba');
    });

    it('should handle odd length palindromes', () => {
        expect(longestPalindrome('abcba')).toBe('abcba');
        expect(longestPalindrome('racecar')).toBe('racecar');
    });

    it('should handle long strings', () => {
        const longPalindrome = 'a'.repeat(1000) + 'b' + 'a'.repeat(1000);
        expect(longestPalindrome(longPalindrome)).toBe(longPalindrome);
    });

    it('should handle strings with multiple palindromes', () => {
        expect(longestPalindrome('abacdfgdcaba')).toBe('aba');
        expect(longestPalindrome('abacdfgdcabba')).toBe('abba');
    });

    it('should handle strings with special characters', () => {
        expect(longestPalindrome('a#b#a')).toBe('a#b#a');
        expect(longestPalindrome('a!b@b!a')).toBe('a!b@b!a');
    });

    it('should handle strings with numbers', () => {
        expect(longestPalindrome('12321')).toBe('12321');
        expect(longestPalindrome('1a2b3b2a1')).toBe('1a2b3b2a1');
    });
});
