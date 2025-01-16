import { encode, decode } from '@code/EncodeAndDecodeStrings';

describe('EncodeAndDecodeStrings', () => {
    // Helper function to test the full encode/decode cycle
    const testEncodeDecode = (input: string[]) => {
        const encoded = encode(input);
        const decoded = decode(encoded);
        expect(decoded).toEqual(input);
    };

    it('should handle basic strings', () => {
        testEncodeDecode(['hello', 'world']);
        testEncodeDecode(['neetcode', 'is', 'great']);
    });

    it('should handle empty array', () => {
        testEncodeDecode([]);
    });

    it('should handle array with empty strings', () => {
        testEncodeDecode(['']);
        testEncodeDecode(['', '', '']);
        testEncodeDecode(['hello', '', 'world']);
    });

    it('should handle strings with special characters', () => {
        testEncodeDecode(['#', '##', '###']);
        testEncodeDecode(['hello#world', 'test#string']);
        testEncodeDecode(['!@#$%^&*', '()_+-=[]{}']);
    });

    it('should handle strings with numbers', () => {
        testEncodeDecode(['123', '456', '789']);
        testEncodeDecode(['1#2#3', '4#5#6']);
    });

    it('should handle strings of varying lengths', () => {
        testEncodeDecode(['a', 'ab', 'abc', 'abcd']);
        testEncodeDecode(['verylongstring', 'short', '']);
    });

    it('should handle strings with spaces', () => {
        testEncodeDecode(['hello world', ' ', '  ']);
        testEncodeDecode(['multiple   spaces', ' leading', 'trailing ']);
    });

    it('should handle unicode characters', () => {
        testEncodeDecode(['🙂', '你好', 'café']);
        testEncodeDecode(['∑∏∪∩', '★☆☎☏']);
    });

    // Specific tests for encode function
    describe('encode', () => {
        it('should produce a string output', () => {
            const encoded = encode(['test']);
            expect(typeof encoded).toBe('string');
        });

        it('should include length information', () => {
            const encoded = encode(['hello']);
            expect(encoded.includes('5#')).toBe(true);
        });
    });

    // Specific tests for decode function
    describe('decode', () => {
        it('should handle consecutive delimiters correctly', () => {
            const input = ['##', '#'];
            const encoded = encode(input);
            expect(decode(encoded)).toEqual(input);
        });

        it('should preserve string lengths exactly', () => {
            const input = ['hello', 'world'];
            const decoded = decode(encode(input));
            expect(decoded[0].length).toBe(5);
            expect(decoded[1].length).toBe(5);
        });
    });
});
