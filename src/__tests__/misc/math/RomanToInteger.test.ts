import { romanToInt } from '@code/RomanToInteger';

describe('RomanToInteger', () => {
    it('should convert basic Roman numerals to integers', () => {
        expect(romanToInt('III')).toBe(3);
        expect(romanToInt('IV')).toBe(4);
        expect(romanToInt('IX')).toBe(9);
        expect(romanToInt('LVIII')).toBe(58);
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });

    it('should handle single character Roman numerals', () => {
        expect(romanToInt('I')).toBe(1);
        expect(romanToInt('V')).toBe(5);
        expect(romanToInt('X')).toBe(10);
        expect(romanToInt('L')).toBe(50);
        expect(romanToInt('C')).toBe(100);
        expect(romanToInt('D')).toBe(500);
        expect(romanToInt('M')).toBe(1000);
    });

    it('should handle edge cases', () => {
        expect(romanToInt('')).toBe(0); // Assuming empty string returns 0
        expect(romanToInt('MMMMCMXCIX')).toBe(4999); // Largest standard Roman numeral
    });
});
