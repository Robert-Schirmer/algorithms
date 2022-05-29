class Assert {
  static strictEqual(v1, v2) {
    if (v1 !== v2) {
      throw new AssertionError(`${v1} is not equal to ${v2}`);
    }
  }

  static arrayEqual(a, b) {
    this._arraySizesEqual();

    a.sort();
    b.sort();

    for (let index = 0; index < a.length; index++) {
      if (a[index] !== b[index]) {
        this._throwArrayNotEqualError(a, b);
      }
    }
  }

  static arrayOrderEqual(a, b) {
    this._arraySizesEqual();

    for (let index = 0; index < a.length; index++) {
      if (a[index] !== b[index]) {
        this._throwArrayNotEqualError(a, b);
      }
    }
  }

  static _arraySizesEqual(a, b) {
    if (a === b) return;
    if (a == null || b == null) {
      this._throwArrayNotEqualError(a, b);
    }
    if (a.length !== b.length) {
      this._throwArrayNotEqualError(a, b);
    }
  }

  static _throwArrayNotEqualError = (a, b) => {
    throw new AssertionError(`[${a}] is not equal to [${b}]`);
  };
}

export default Assert;

class AssertionError extends Error {
  constructor(message) {
    super(message);
    this.name = "AssertionError";
    this.code = "ASSERTION_ERROR";
  }
}
