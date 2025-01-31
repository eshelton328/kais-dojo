import MinStack from '@code/MinStack';

describe('MinStack', () => {
    let stack: MinStack<number>;

    beforeEach(() => {
        stack = new MinStack<number>();
    });

    it('should initialize with length 0', () => {
        expect(stack.length).toBe(0);
    });

    it('should push elements onto the stack', () => {
        stack.push(3);
        stack.push(5);
        expect(stack.length).toBe(2);
        expect(stack.top()).toBe(5);
    });

    it('should pop elements from the stack', () => {
        stack.push(3);
        stack.push(5);
        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBeUndefined();
        expect(stack.length).toBe(0);
    });

    it('should return the top element without removing it', () => {
        stack.push(3);
        stack.push(5);
        expect(stack.top()).toBe(5);
        expect(stack.length).toBe(2);
    });

    it('should return the minimum element', () => {
        stack.push(3);
        expect(stack.getMin()).toBe(3);
        stack.push(5);
        expect(stack.getMin()).toBe(3);
        stack.push(2);
        expect(stack.getMin()).toBe(2);
        stack.pop();
        expect(stack.getMin()).toBe(3);
    });

    it('should handle mixed operations', () => {
        stack.push(2);
        stack.push(0);
        stack.push(3);
        stack.push(0);
        expect(stack.getMin()).toBe(0);
        stack.pop();
        expect(stack.getMin()).toBe(0);
        stack.pop();
        expect(stack.getMin()).toBe(0);
        stack.pop();
        expect(stack.getMin()).toBe(2);
    });

    it('should handle empty stack operations', () => {
        expect(stack.pop()).toBeUndefined();
        expect(stack.top()).toBeUndefined();
        expect(stack.getMin()).toBeUndefined();
    });
});
