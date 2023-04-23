import { isArrIncrease } from './data';

describe('test function isArrayIncrease', () => {
  describe('test value input not array', () => {
    it('input string should return false', () => {
      expect(isArrIncrease('abc')).toBe(false);
    });
    it('input obj should return false', () => {
      expect(isArrIncrease({})).toBe(false);
    });
    it('input function should return false', () => {
      expect(isArrIncrease(() => {})).toBe(false);
    });
    it('input NaN should return false', () => {
      expect(isArrIncrease(NaN)).toBe(false);
    });
    it('input value null should return false', () => {
      expect(isArrIncrease(null)).toBe(false);
    });
    it('input undefined should return false', () => {
      expect(isArrIncrease(undefined)).toBe(false);
    });
  });
  describe('test value input not array increase', () => {
    it('input array string should return false', () => {
      expect(isArrIncrease(['a', 'b'])).toBe(false);
    });
    it('input array string & number should return false', () => {
      expect(isArrIncrease(['a', 1, 2, 3])).toBe(false);
    });
    it('input array number have value null should return false', () => {
      expect(isArrIncrease([1, null, 2])).toBe(false);
    });
    it('input array have value undefined should return false', () => {
      expect(isArrIncrease([1, undefined])).toBe(false);
    });
    it('input array have value NaN should return false', () => {
      expect(isArrIncrease([1, NaN, 3])).toBe(false);
    });
    it('input array decrease should return false', () => {
      expect(isArrIncrease([5, 4, 3, 2, 1])).toBe(false);
    });
    it('input array decrease have decimal number should return false', () => {
      expect(isArrIncrease([0.5, 0.2])).toBe(false);
    });
  });
  describe('test value input not array increase', () => {
    it('input array of elements with the same value should return true', () => {
      expect(isArrIncrease([1, 1, 1])).toBe(true);
    });
    it('input array have one elements same value should return true', () => {
      expect(isArrIncrease([1, 2, 2, 3])).toBe(true);
    });
    it('array with element value increase should return true', () => {
      expect(isArrIncrease([1, 2, 3, 4])).toBe(true);
    });
    it('array with element value decimial number increase should return true', () => {
      expect(isArrIncrease([0.1, 0.2, 0.3, 0.4])).toBe(true);
    });
    it('array with element value negative number increase should return true', () => {
      expect(isArrIncrease([-5, -4, -3, -2, -1])).toBe(true);
    });
  });
});
