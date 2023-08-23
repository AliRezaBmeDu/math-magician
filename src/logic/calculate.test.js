import calculate from './calculate';

describe('calculate function', () => {
  it('should clear the calculator', () => {
    const obj = {
      total: 2,
      next: 5,
      operation: '+',
    };
    const buttonName = 'AC';
    const output = calculate(obj, buttonName);
    expect(output).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update the next value for numbers', () => {
    const obj = {
      total: 2,
      next: '5',
      operation: '+',
    };
    const buttonName = '3';
    const output = calculate(obj, buttonName);
    expect(output).toEqual({
      total: 2,
      next: '53',
      operation: '+',
    });
  });

  it('should toggle the sign of the current value', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    const buttonName = '+/-';
    const output = calculate(obj, buttonName);
    expect(output).toEqual({
      total: null,
      next: '-5',
      operation: null,
    });
  });

  it('should perform the operation and update the total', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '-',
    };
    const buttonName = '=';
    const output = calculate(obj, buttonName);
    expect(output).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  it('should perform addition operation', () => {
    const obj = {
      total: 5,
      next: '3',
      operation: '+',
    };
    const buttonName = '=';
    const output = calculate(obj, buttonName);
    expect(output).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  // decimal point testing
  it('should handle decimal point correctly', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    const buttonName = '.';
    const output = calculate(obj, buttonName);
    expect(output).toEqual({
      total: null,
      next: '5.',
      operation: null,
    });
  });
});
