import { rotate } from '@code/RotateImage';

describe('rotate', () => {
    it('should rotate a 2x2 matrix', () => {
        const matrix = [
            [1, 2],
            [3, 4]
        ];
        rotate(matrix);
        expect(matrix).toEqual([
            [3, 1],
            [4, 2]
        ]);
    });

    it('should rotate a 3x3 matrix', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        rotate(matrix);
        expect(matrix).toEqual([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ]);
    });

    it('should rotate a 4x4 matrix', () => {
        const matrix = [
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16]
        ];
        rotate(matrix);
        expect(matrix).toEqual([
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11]
        ]);
    });

    it('should handle 1x1 matrix', () => {
        const matrix = [[1]];
        rotate(matrix);
        expect(matrix).toEqual([[1]]);
    });

    it('should handle matrix with zeros', () => {
        const matrix = [
            [0, 0],
            [1, 0]
        ];
        rotate(matrix);
        expect(matrix).toEqual([
            [1, 0],
            [0, 0]
        ]);
    });
});
