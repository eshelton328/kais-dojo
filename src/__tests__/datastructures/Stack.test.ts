import { Stack } from '@code/Stack';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    describe('length property', () => {
        it('should initialize with length 0', () => {
            expect(stack.length).toBe(0);
        });

        it('should update length when pushing elements', () => {
            stack.push(1);
            expect(stack.length).toBe(1);
            stack.push(2);
            expect(stack.length).toBe(2);
        });

        it('should update length when popping elements', () => {
            stack.push(1);
            stack.push(2);
            stack.pop();
            expect(stack.length).toBe(1);
            stack.pop();
            expect(stack.length).toBe(0);
        });
    });

    describe('push', () => {
        it('should add elements to the stack', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.peek()).toBe(3);
            expect(stack.length).toBe(3);
        });

        it('should handle pushing undefined or null', () => {
            stack.push(undefined as any);
            expect(stack.length).toBe(1);
            expect(stack.peek()).toBeUndefined();

            stack.push(null as any);
            expect(stack.length).toBe(2);
            expect(stack.peek()).toBeNull();
        });
    });

    describe('pop', () => {
        it('should remove and return the top element', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(1);
        });

        it('should return undefined when popping from empty stack', () => {
            expect(stack.pop()).toBeUndefined();
        });

        it('should update length after popping', () => {
            stack.push(1);
            stack.push(2);
            stack.pop();
            expect(stack.length).toBe(1);
        });
    });

    describe('peek', () => {
        it('should return the top element without removing it', () => {
            stack.push(1);
            stack.push(2);

            expect(stack.peek()).toBe(2);
            expect(stack.length).toBe(2); // Length shouldn't change
            expect(stack.peek()).toBe(2); // Should still be the same element
        });

        it('should return undefined for empty stack', () => {
            expect(stack.peek()).toBeUndefined();
        });
    });

    describe('isEmpty', () => {
        it('should return true for empty stack', () => {
            expect(stack.isEmpty()).toBe(true);
        });

        it('should return false for non-empty stack', () => {
            stack.push(1);
            expect(stack.isEmpty()).toBe(false);
        });

        it('should return true after all elements are popped', () => {
            stack.push(1);
            stack.push(2);
            stack.pop();
            stack.pop();
            expect(stack.isEmpty()).toBe(true);
        });
    });

    describe('LIFO behavior', () => {
        it('should maintain LIFO (Last-In-First-Out) order', () => {
            const elements = [1, 2, 3, 4, 5];
            const expected = [5, 4, 3, 2, 1];

            // Push all elements
            elements.forEach(elem => stack.push(elem));

            // Pop all elements and verify order
            const result = [];
            while (!stack.isEmpty()) {
                result.push(stack.pop());
            }

            expect(result).toEqual(expected);
        });
    });

    describe('edge cases', () => {
        it('should handle pushing and popping large numbers of elements', () => {
            const count = 1000;
            for (let i = 0; i < count; i++) {
                stack.push(i);
            }
            expect(stack.length).toBe(count);

            for (let i = count - 1; i >= 0; i--) {
                expect(stack.pop()).toBe(i);
            }
            expect(stack.isEmpty()).toBe(true);
        });

        it('should handle mixed operations', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.pop()).toBe(2);
            stack.push(3);
            expect(stack.peek()).toBe(3);
            stack.push(4);
            expect(stack.length).toBe(3);
            expect(stack.pop()).toBe(4);
            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(1);
            expect(stack.isEmpty()).toBe(true);
        });
    });
});
