import { maxSubArray } from '@code/MaximumSubarray';

describe('MaximumSubarray', () => {
  it('should handle basic cases', () => {
    expect(maxSubArray([1, 2, 3, 4])).toBe(10);
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('should handle all positive numbers', () => {
    expect(maxSubArray([1, 2, 3, 4, 5])).toBe(15);
    expect(maxSubArray([10, 20, 30])).toBe(60);
  });

  it('should handle all negative numbers', () => {
    expect(maxSubArray([-1, -2, -3, -4])).toBe(-1);
    expect(maxSubArray([-5, -4, -3, -2, -1])).toBe(-1);
  });

  it('should handle single element arrays', () => {
    expect(maxSubArray([5])).toBe(5);
    expect(maxSubArray([-3])).toBe(-3);
    expect(maxSubArray([0])).toBe(0);
  });

  it('should handle mixed positive and negative numbers', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });

  it('should handle arrays with zeros', () => {
    expect(maxSubArray([0, 0, 0, 0])).toBe(0);
    expect(maxSubArray([-1, 0, -2, 0, -3])).toBe(0);
    expect(maxSubArray([1, 0, 2, 0, 3])).toBe(6);
  });

  it('should handle arrays with alternating positive and negative numbers', () => {
    expect(maxSubArray([1, -1, 1, -1, 1])).toBe(1);
    expect(maxSubArray([-1, 1, -1, 1, -1])).toBe(1);
  });
});
