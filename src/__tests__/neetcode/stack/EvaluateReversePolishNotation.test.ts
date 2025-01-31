import { evalRPN } from '@code/EvaluateReversePolishNotation';

describe('EvaluateReversePolishNotation', () => {
    it('should evaluate simple expressions', () => {
        expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
        expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
    });

    it('should handle negative numbers', () => {
        expect(evalRPN(['2', '1', '-', '3', '*'])).toBe(3);
    });

    it('should handle multiple operations', () => {
        expect(evalRPN(['5', '1', '2', '+', '4', '*', '+', '3', '-'])).toBe(14);
        expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22);
    });

    it('should handle division with truncation towards zero', () => {
        expect(evalRPN(['10', '3', '/'])).toBe(3);
        expect(evalRPN(['-10', '3', '/'])).toBe(-3);
    });

    it('should handle single number', () => {
        expect(evalRPN(['42'])).toBe(42);
    });

    it('should handle complex expressions', () => {
        expect(evalRPN(['3', '4', '+', '2', '*', '7', '/'])).toBe(2);
        expect(evalRPN(['5', '1', '2', '+', '4', '*', '+', '3', '-', '10', '2', '/', '+'])).toBe(19);
    });
});
