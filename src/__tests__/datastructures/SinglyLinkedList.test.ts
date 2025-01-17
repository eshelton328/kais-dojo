import { SinglyLinkedList } from '@code/SinglyLinkedList';

describe('SinglyLinkedList', () => {
    let list: SinglyLinkedList<number>;

    beforeEach(() => {
        list = new SinglyLinkedList<number>();
    });

    describe('length property', () => {
        it('should initialize with length 0', () => {
            expect(list.length).toBe(0);
        });

        it('should update length when adding elements', () => {
            list.append(1);
            expect(list.length).toBe(1);
            list.append(2);
            expect(list.length).toBe(2);
        });

        it('should update length when removing elements', () => {
            list.append(1);
            list.append(2);
            list.remove(1);
            expect(list.length).toBe(1);
        });
    });

    describe('append', () => {
        it('should append elements to the end', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.get(0)).toBe(1);
            expect(list.get(1)).toBe(2);
            expect(list.get(2)).toBe(3);
        });
    });

    describe('prepend', () => {
        it('should prepend elements to the start', () => {
            list.prepend(1);
            list.prepend(2);
            list.prepend(3);
            expect(list.get(0)).toBe(3);
            expect(list.get(1)).toBe(2);
            expect(list.get(2)).toBe(1);
        });
    });

    describe('insertAt', () => {
        it('should insert at the specified index', () => {
            list.append(1);
            list.append(3);
            list.insertAt(2, 1);
            expect(list.get(0)).toBe(1);
            expect(list.get(1)).toBe(2);
            expect(list.get(2)).toBe(3);
        });

        it('should handle insertion at start', () => {
            list.append(1);
            list.insertAt(0, 0);
            expect(list.get(0)).toBe(0);
            expect(list.get(1)).toBe(1);
        });

        it('should handle insertion at end', () => {
            list.append(1);
            list.insertAt(2, 1);
            expect(list.get(0)).toBe(1);
            expect(list.get(1)).toBe(2);
        });

        it('should throw error for invalid index', () => {
            expect(() => list.insertAt(1, 1)).toThrow();
            expect(() => list.insertAt(1, -1)).toThrow();
        });
    });

    describe('remove', () => {
        it('should remove the first occurrence of an item', () => {
            list.append(1);
            list.append(2);
            list.append(2);
            list.append(3);
            const removed = list.remove(2);
            expect(removed).toBe(2);
            expect(list.get(0)).toBe(1);
            expect(list.get(1)).toBe(2);
            expect(list.get(2)).toBe(3);
        });

        it('should return undefined when item not found', () => {
            list.append(1);
            list.append(2);
            expect(list.remove(3)).toBeUndefined();
        });
    });

    describe('get', () => {
        it('should return item at specified index', () => {
            list.append(1);
            list.append(2);
            expect(list.get(0)).toBe(1);
            expect(list.get(1)).toBe(2);
        });

        it('should return undefined for invalid index', () => {
            list.append(1);
            expect(list.get(-1)).toBeUndefined();
            expect(list.get(1)).toBeUndefined();
        });
    });

    describe('removeAt', () => {
        it('should remove item at specified index', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            const removed = list.removeAt(1);
            expect(removed).toBe(2);
            expect(list.get(0)).toBe(1);
            expect(list.get(1)).toBe(3);
        });

        it('should return undefined for invalid index', () => {
            list.append(1);
            expect(list.removeAt(-1)).toBeUndefined();
            expect(list.removeAt(1)).toBeUndefined();
        });
    });
});
