import { isPalindrome } from '@code/ValidPalindrome';

describe('ValidPalindrome', () => {
    describe('basic functionality', () => {
        it('should return true for basic palindromes', () => {
            expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
            expect(isPalindrome('race a car')).toBe(false);
            expect(isPalindrome('racecar')).toBe(true);
        });

        it('should handle empty strings and spaces', () => {
            expect(isPalindrome('')).toBe(true);
            expect(isPalindrome(' ')).toBe(true);
            expect(isPalindrome('  ')).toBe(true);
        });
    });

    describe('case sensitivity', () => {
        it('should ignore case', () => {
            expect(isPalindrome('RaCeCaR')).toBe(true);
            expect(isPalindrome('A Man, A Plan, A Canal: Panama')).toBe(true);
            expect(isPalindrome('No Lemon, No Melon')).toBe(true);
        });

        it('should handle mixed case with special characters', () => {
            expect(isPalindrome('Mr. Owl ate my metal worm')).toBe(true);
            expect(isPalindrome('Do geese see God?')).toBe(true);
            expect(isPalindrome('Madam, I\'m Adam')).toBe(true);
        });
    });

    describe('special characters', () => {
        it('should ignore non-alphanumeric characters', () => {
            expect(isPalindrome('ab_a')).toBe(true);
            expect(isPalindrome('0_0')).toBe(true);
            expect(isPalindrome('!@#$%^&*()')).toBe(true);
            expect(isPalindrome('.,;:!?')).toBe(true);
        });

        it('should handle unicode characters', () => {
            expect(isPalindrome('A1¡!1A')).toBe(true);
            expect(isPalindrome('A1¿?1A')).toBe(true);
        });
    });

    describe('numbers and mixed content', () => {
        it('should handle pure number strings', () => {
            expect(isPalindrome('12321')).toBe(true);
            expect(isPalindrome('123')).toBe(false);
            expect(isPalindrome('1234321')).toBe(true);
        });

        it('should handle alphanumeric combinations', () => {
            expect(isPalindrome('1a1')).toBe(true);
            expect(isPalindrome('1abc1')).toBe(false);
            expect(isPalindrome('1abc2')).toBe(false);
            expect(isPalindrome('Tech2hceT')).toBe(true);
        });
    });

    describe('edge cases', () => {
        it('should handle single characters', () => {
            expect(isPalindrome('a')).toBe(true);
            expect(isPalindrome('1')).toBe(true);
            expect(isPalindrome('.')).toBe(true);
            expect(isPalindrome('?')).toBe(true);
        });

        it('should handle repeated characters', () => {
            expect(isPalindrome('aaa')).toBe(true);
            expect(isPalindrome('111')).toBe(true);
            expect(isPalindrome('a a a')).toBe(true);
        });

        it('should handle long palindromes', () => {
            expect(isPalindrome('a'.repeat(10000))).toBe(true);
            expect(isPalindrome('a'.repeat(9999) + 'b' + 'a'.repeat(9999))).toBe(true);
            expect(isPalindrome('a'.repeat(9999) + 'b' + 'c' + 'a'.repeat(9999))).toBe(false);
        });
    });

    describe('complex palindromes', () => {
        it('should handle sentences', () => {
            expect(isPalindrome('Never odd or even')).toBe(true);
            expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
            expect(isPalindrome('Red rum, sir, is murder')).toBe(true);
            expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true);
        });

        it('should handle mixed spacing and punctuation', () => {
            expect(isPalindrome('A Santa lived as a devil at NASA')).toBe(true);
            expect(isPalindrome('Doc, note: I dissent. A fast never prevents a fatness. I diet on cod.')).toBe(true);
            expect(isPalindrome('Never a foot too far, even.')).toBe(true);
        });
    });
});
