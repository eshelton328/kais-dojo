import { isAnagram } from '@code/ValidAnagram';

describe('ValidAnagram', () => {
    it('should return true for valid anagrams', () => {
        expect(isAnagram('anagram', 'nagaram')).toBe(true);
        expect(isAnagram('silent', 'listen')).toBe(true);
        expect(isAnagram('', '')).toBe(true);
    });

    it('should return false for non-anagrams', () => {
        expect(isAnagram('rat', 'car')).toBe(false);
        expect(isAnagram('hello', 'world')).toBe(false);
        expect(isAnagram('python', 'javascript')).toBe(false);
    });

    it('should handle different string lengths', () => {
        expect(isAnagram('ab', 'abc')).toBe(false);
        expect(isAnagram('abc', 'ab')).toBe(false);
        expect(isAnagram('a', '')).toBe(false);
    });

    it('should be case-sensitive', () => {
        expect(isAnagram('Anagram', 'nagaram')).toBe(false);
        expect(isAnagram('Silent', 'listen')).toBe(false);
    });

    it('should handle repeated characters', () => {
        expect(isAnagram('bookkeeper', 'goalkeeper')).toBe(false);
        expect(isAnagram('debit card', 'bad credit')).toBe(true);
        expect(isAnagram('aacc', 'ccac')).toBe(false);
    });

    it('should handle special characters and spaces', () => {
        expect(isAnagram('debit card', 'bad credit')).toBe(true);
        expect(isAnagram('!@#$', '$#@!')).toBe(true);
        expect(isAnagram('a b c', 'c b a')).toBe(true);
    });
});
