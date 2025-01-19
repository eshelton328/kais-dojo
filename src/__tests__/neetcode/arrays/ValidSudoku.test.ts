import { isValidSudoku } from '@code/ValidSudoku';

describe('ValidSudoku', () => {
    it('should return true for valid sudoku board', () => {
        const board = [
            ["5","3",".",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]
        ];
        expect(isValidSudoku(board)).toBe(true);
    });

    it('should return false for invalid sudoku board', () => {
        const board = [
            ["8","3",".",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]
        ];
        expect(isValidSudoku(board)).toBe(false);
    });

    it('should handle empty board', () => {
        const board = Array(9).fill(null).map(() => Array(9).fill("."));
        expect(isValidSudoku(board)).toBe(true);
    });

    it('should detect duplicate in row', () => {
        const board = Array(9).fill(null).map(() => Array(9).fill("."));
        board[0][0] = "1";
        board[0][8] = "1";
        expect(isValidSudoku(board)).toBe(false);
    });

    it('should detect duplicate in column', () => {
        const board = Array(9).fill(null).map(() => Array(9).fill("."));
        board[0][0] = "1";
        board[8][0] = "1";
        expect(isValidSudoku(board)).toBe(false);
    });

    it('should detect duplicate in 3x3 box', () => {
        const board = Array(9).fill(null).map(() => Array(9).fill("."));
        board[0][0] = "1";
        board[2][2] = "1";
        expect(isValidSudoku(board)).toBe(false);
    });

    it('should handle board with single number', () => {
        const board = Array(9).fill(null).map(() => Array(9).fill("."));
        board[4][4] = "5";
        expect(isValidSudoku(board)).toBe(true);
    });

    it('should handle board with all valid numbers', () => {
        const board = Array(9).fill(null).map(() => Array(9).fill("."));
        // Fill first row with valid numbers
        for (let i = 0; i < 9; i++) {
            board[0][i] = String(i + 1);
        }
        expect(isValidSudoku(board)).toBe(true);
    });
});
