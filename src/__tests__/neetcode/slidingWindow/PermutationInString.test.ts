import { checkInclusion } from '@code/PermutationInString';

describe('PermutationInString', () => {
    it('should handle basic cases', () => {
        expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
        expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
    });

    it('should handle empty strings', () => {
        expect(checkInclusion('', 'abc')).toBe(false);
        expect(checkInclusion('abc', '')).toBe(false);
        expect(checkInclusion('', '')).toBe(false);
    });

    it('should handle cases where s1 is longer than s2', () => {
        expect(checkInclusion('abcde', 'abc')).toBe(false);
        expect(checkInclusion('hello', 'hi')).toBe(false);
    });

    it('should handle exact matches', () => {
        expect(checkInclusion('abc', 'abc')).toBe(true);
        expect(checkInclusion('xyz', 'xyz')).toBe(true);
    });

    it('should handle cases with repeated characters', () => {
        expect(checkInclusion('aab', 'baa')).toBe(true);
        expect(checkInclusion('aab', 'bab')).toBe(false);
    });

    it('should handle cases with special characters and numbers', () => {
        expect(checkInclusion('123', '321')).toBe(true);
        expect(checkInclusion('!@#', '#@!')).toBe(true);
        expect(checkInclusion('a1b', 'b1a')).toBe(true);
    });

    it('should handle large strings', () => {
        const s1 = 'a'.repeat(1000) + 'b'.repeat(1000);
        const s2 = 'b'.repeat(1000) + 'a'.repeat(1000);
        expect(checkInclusion(s1, s2)).toBe(true);
    });

    it('should handle cases with different character sets', () => {
        expect(checkInclusion('abc', 'def')).toBe(false);
        expect(checkInclusion('xyz', 'abc')).toBe(false);
    });

    it('should handle cases with spaces', () => {
        expect(checkInclusion('abc', 'b a c')).toBe(false);
        expect(checkInclusion('a b c', 'bac')).toBe(false);
    });

    it('should handle unicode characters', () => {
        expect(checkInclusion('こんにちは', 'はちにんこ')).toBe(true);
        expect(checkInclusion('你好', '好你')).toBe(true);
    });

    it('should handle edge cases', () => {
        expect(checkInclusion('a', 'a')).toBe(true);
        expect(checkInclusion('a', 'b')).toBe(false);
        expect(checkInclusion('a', 'aa')).toBe(true);
    });
});
