import { intToRoman } from '@code/IntegerToRoman';

describe('IntegerToRoman', () => {
    it('should convert basic integers to Roman numerals', () => {
        expect(intToRoman(3)).toBe('III');
        expect(intToRoman(4)).toBe('IV');
        expect(intToRoman(9)).toBe('IX');
        expect(intToRoman(58)).toBe('LVIII');
        expect(intToRoman(1994)).toBe('MCMXCIV');
    });

    it('should handle single digit integers', () => {
        expect(intToRoman(1)).toBe('I');
        expect(intToRoman(5)).toBe('V');
        expect(intToRoman(10)).toBe('X');
        expect(intToRoman(50)).toBe('L');
        expect(intToRoman(100)).toBe('C');
        expect(intToRoman(500)).toBe('D');
        expect(intToRoman(1000)).toBe('M');
    });

    it('should handle edge cases', () => {
        expect(intToRoman(0)).toBe(''); // Assuming 0 returns an empty string
        expect(intToRoman(3999)).toBe('MMMCMXCIX'); // Largest standard Roman numeral
    });
});
