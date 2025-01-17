import { BinarySearchTree } from '@code/BinarySearchTree';

describe('BinarySearchTree', () => {
    let bst: BinarySearchTree<number>;

    beforeEach(() => {
        bst = new BinarySearchTree<number>();
    });

    describe('insert', () => {
        it('should insert elements maintaining BST properties', () => {
            bst.insert(5);
            bst.insert(3);
            bst.insert(7);
            bst.insert(1);
            bst.insert(4);
            expect(bst.InOrderTraversal()).toEqual([1, 3, 4, 5, 7]);
        });

        it('should handle duplicate values', () => {
            bst.insert(5);
            bst.insert(5);
            bst.insert(5);
            expect(bst.InOrderTraversal()).toEqual([5]);
        });
    });

    describe('search', () => {
        beforeEach(() => {
            bst.insert(5);
            bst.insert(3);
            bst.insert(7);
            bst.insert(1);
            bst.insert(4);
        });

        it('should find existing elements', () => {
            expect(bst.search(5)).toBe(true);
            expect(bst.search(3)).toBe(true);
            expect(bst.search(7)).toBe(true);
            expect(bst.search(1)).toBe(true);
            expect(bst.search(4)).toBe(true);
        });

        it('should return false for non-existing elements', () => {
            expect(bst.search(0)).toBe(false);
            expect(bst.search(6)).toBe(false);
            expect(bst.search(8)).toBe(false);
        });

        it('should handle searching in empty tree', () => {
            const emptyBst = new BinarySearchTree<number>();
            expect(emptyBst.search(1)).toBe(false);
        });
    });

    describe('delete', () => {
        beforeEach(() => {
            bst.insert(5);
            bst.insert(3);
            bst.insert(7);
            bst.insert(1);
            bst.insert(4);
            bst.insert(6);
            bst.insert(8);
        });

        it('should delete leaf nodes', () => {
            bst.delete(1);
            expect(bst.InOrderTraversal()).toEqual([3, 4, 5, 6, 7, 8]);
            bst.delete(8);
            expect(bst.InOrderTraversal()).toEqual([3, 4, 5, 6, 7]);
        });

        it('should delete nodes with one child', () => {
            bst.delete(1);
            bst.delete(3);
            expect(bst.InOrderTraversal()).toEqual([4, 5, 6, 7, 8]);
        });

        it('should delete nodes with two children', () => {
            bst.delete(7);
            expect(bst.InOrderTraversal()).toEqual([1, 3, 4, 5, 6, 8]);
            bst.delete(5); // root node
            expect(bst.InOrderTraversal()).toEqual([1, 3, 4, 6, 8]);
        });

        it('should handle deleting non-existent nodes', () => {
            bst.delete(10);
            expect(bst.InOrderTraversal()).toEqual([1, 3, 4, 5, 6, 7, 8]);
        });
    });

    describe('traversal', () => {
        beforeEach(() => {
            bst.insert(5);
            bst.insert(3);
            bst.insert(7);
            bst.insert(1);
            bst.insert(4);
            bst.insert(6);
            bst.insert(8);
        });

        it('should traverse in-order correctly', () => {
            expect(bst.InOrderTraversal()).toEqual([1, 3, 4, 5, 6, 7, 8]);
        });

        it('should traverse pre-order correctly', () => {
            expect(bst.PreOrderTraversal()).toEqual([5, 3, 1, 4, 7, 6, 8]);
        });

        it('should traverse post-order correctly', () => {
            expect(bst.PostOrderTraversal()).toEqual([1, 4, 3, 6, 8, 7, 5]);
        });

        it('should handle traversing empty tree', () => {
            const emptyBst = new BinarySearchTree<number>();
            expect(emptyBst.InOrderTraversal()).toEqual([]);
            expect(emptyBst.PreOrderTraversal()).toEqual([]);
            expect(emptyBst.PostOrderTraversal()).toEqual([]);
        });
    });
});
