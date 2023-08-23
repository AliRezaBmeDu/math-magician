import operate from './operate';

describe('operate function', () => {
  it('should perform addition', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe('8');
  });

  it('should perform subtraction', () => {
    const result = operate('10', '5', '-');
    expect(result).toBe('5');
  });

  it('should perform multiplication', () => {
    const result = operate('4', '6', 'x');
    expect(result).toBe('24');
  });

  it('should perform legal division', () => {
    const result = operate('12', '4', '÷');
    expect(result).toBe('3');
  });

  it('should not divide by zero', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should perform remainder operation', () => {
    const result = operate('7', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle remainder with divisor as zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw error for unknown operation', () => {
    expect(() => operate('3', '4', '^')).toThrow("Unknown operation '^'");
  });
});
