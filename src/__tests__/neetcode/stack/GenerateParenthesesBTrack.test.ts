import { generateParenthesis } from '../../../GenerateParentheses';

describe('generateParenthesisBTrack', () => {
    test('should return ["()"] for n = 1', () => {
        expect(generateParenthesis(1)).toEqual(['()']);
    });

    test('should return ["(())", "()()"] for n = 2', () => {
        const result = generateParenthesis(2);
        expect(result).toContain('(())');
        expect(result).toContain('()()');
        expect(result.length).toBe(2);
    });

    test('should return correct combinations for n = 3', () => {
        const result = generateParenthesis(3);
        const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];

        // Check if all expected combinations are present
        expected.forEach(combination => {
            expect(result).toContain(combination);
        });

        // Check if the total number of combinations is correct
        expect(result.length).toBe(5);
    });

    test('should return empty array for n = 0', () => {
        expect(generateParenthesis(0)).toEqual([]);
    });
});
