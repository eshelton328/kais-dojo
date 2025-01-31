import { isValid } from '@code/ValidParentheses';

describe('ValidParentheses', () => {
    it('should return true for valid parentheses', () => {
        expect(isValid('()')).toBe(true);
        expect(isValid('()[]{}')).toBe(true);
        expect(isValid('{[]}')).toBe(true);
        expect(isValid('([{}])')).toBe(true);
    });

    it('should return false for invalid parentheses', () => {
        expect(isValid('(]')).toBe(false);
        expect(isValid('([)]')).toBe(false);
        expect(isValid('(((')).toBe(false);
        expect(isValid(']')).toBe(false);
    });

    it('should handle empty string', () => {
        expect(isValid('')).toBe(true);
    });

    it('should handle single type of parentheses', () => {
        expect(isValid('(((((((((())))))))))')).toBe(true);
        expect(isValid('((((((((((())))))))))')).toBe(false);
    });

    it('should handle mixed types of parentheses', () => {
        expect(isValid('([]){}')).toBe(true);
        expect(isValid('([{}])')).toBe(true);
        expect(isValid('([)]')).toBe(false);
    });

    it('should handle long strings', () => {
        const validString = '()'.repeat(5000) + '[]'.repeat(5000) + '{}'.repeat(5000);
        expect(isValid(validString)).toBe(true);
    });
});
