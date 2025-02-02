import { carFleet } from '@code/CarFleet';

describe('carFleet', () => {
  test('returns 0 when positions and speeds are empty', () => {
    expect(carFleet(10, [], [])).toBe(0);
  });

  test('single car should form one fleet', () => {
    expect(carFleet(100, [0], [1])).toBe(1);
  });

  test('cars starting at the same position form one fleet', () => {
    expect(carFleet(10, [5, 5, 5], [1, 2, 3])).toBe(1);
  });

  test('cars with same speed but different positions remain separate', () => {
    expect(carFleet(10, [8, 6, 4], [2, 2, 2])).toBe(3);
  });

  test('cars that catch up eventually merge into one fleet', () => {
    expect(carFleet(10, [0, 2, 4], [4, 3, 2])).toBe(1);
  });

  test('cars that all catch up form one fleet', () => {
    expect(carFleet(10, [0, 1, 2], [3, 2, 1])).toBe(1);
  });

  test('large target distance where no car catches up (separate fleets)', () => {
    expect(carFleet(1000000, [0, 2, 4], [1, 2, 3])).toBe(3);
  });

  test('cars starting at the target are considered one fleet', () => {
    expect(carFleet(10, [10, 10, 10], [1, 2, 3])).toBe(1);
  });

  test('complex fleet formations', () => {
    expect(carFleet(12, [10, 8, 6, 4, 2], [2, 3, 1, 4, 2])).toBe(3);
  });

  test('cars with very different speeds', () => {
    expect(carFleet(10, [0, 1, 2], [10, 1, 1])).toBe(2);
  });

  test('edge cases with close positions and fractional speeds', () => {
    expect(carFleet(10, [9, 9.1, 9.2], [1, 0.5, 0.1])).toBe(1);
  });
});
