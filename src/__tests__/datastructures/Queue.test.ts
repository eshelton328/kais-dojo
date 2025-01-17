import { Queue } from '@code/Queue';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    describe('length property', () => {
        it('should initialize with length 0', () => {
            expect(queue.length).toBe(0);
        });

        it('should update length when enqueueing elements', () => {
            queue.enqueue(1);
            expect(queue.length).toBe(1);
            queue.enqueue(2);
            expect(queue.length).toBe(2);
        });

        it('should update length when dequeueing elements', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.dequeue();
            expect(queue.length).toBe(1);
            queue.dequeue();
            expect(queue.length).toBe(0);
        });
    });

    describe('enqueue', () => {
        it('should add elements to the queue', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            expect(queue.peek()).toBe(1);
            expect(queue.length).toBe(3);
        });

        it('should handle enqueueing undefined or null', () => {
            queue.enqueue(undefined as any);
            expect(queue.length).toBe(1);
            expect(queue.peek()).toBeUndefined();

            queue.enqueue(null as any);
            expect(queue.length).toBe(2);
            expect(queue.dequeue()).toBeUndefined();
            expect(queue.peek()).toBeNull();
        });
    });

    describe('dequeue', () => {
        it('should remove and return the front element', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);

            expect(queue.dequeue()).toBe(1);
            expect(queue.dequeue()).toBe(2);
            expect(queue.dequeue()).toBe(3);
        });

        it('should return undefined when dequeueing from empty queue', () => {
            expect(queue.dequeue()).toBeUndefined();
        });

        it('should update length after dequeueing', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.dequeue();
            expect(queue.length).toBe(1);
        });
    });

    describe('peek', () => {
        it('should return the front element without removing it', () => {
            queue.enqueue(1);
            queue.enqueue(2);

            expect(queue.peek()).toBe(1);
            expect(queue.length).toBe(2); // Length shouldn't change
            expect(queue.peek()).toBe(1); // Should still be the same element
        });

        it('should return undefined for empty queue', () => {
            expect(queue.peek()).toBeUndefined();
        });
    });

    describe('isEmpty', () => {
        it('should return true for empty queue', () => {
            expect(queue.isEmpty()).toBe(true);
        });

        it('should return false for non-empty queue', () => {
            queue.enqueue(1);
            expect(queue.isEmpty()).toBe(false);
        });

        it('should return true after all elements are dequeued', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.dequeue();
            queue.dequeue();
            expect(queue.isEmpty()).toBe(true);
        });
    });

    describe('FIFO behavior', () => {
        it('should maintain FIFO (First-In-First-Out) order', () => {
            const elements = [1, 2, 3, 4, 5];

            // Enqueue all elements
            elements.forEach(elem => queue.enqueue(elem));

            // Dequeue all elements and verify order
            elements.forEach(expected => {
                expect(queue.dequeue()).toBe(expected);
            });
        });
    });

    describe('edge cases', () => {
        it('should handle enqueueing and dequeueing large numbers of elements', () => {
            const count = 1000;
            for (let i = 0; i < count; i++) {
                queue.enqueue(i);
            }
            expect(queue.length).toBe(count);

            for (let i = 0; i < count; i++) {
                expect(queue.dequeue()).toBe(i);
            }
            expect(queue.isEmpty()).toBe(true);
        });

        it('should handle mixed operations', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.dequeue()).toBe(1);
            queue.enqueue(3);
            expect(queue.peek()).toBe(2);
            queue.enqueue(4);
            expect(queue.length).toBe(3);
            expect(queue.dequeue()).toBe(2);
            expect(queue.dequeue()).toBe(3);
            expect(queue.dequeue()).toBe(4);
            expect(queue.isEmpty()).toBe(true);
        });

        it('should handle enqueue after empty', () => {
            queue.enqueue(1);
            queue.dequeue();
            queue.enqueue(2);
            expect(queue.peek()).toBe(2);
            expect(queue.length).toBe(1);
        });
    });
});
