class Assert {
  static strictEqual(v1, v2) {
    if (v1 !== v2) {
      throw new AssertionError(`${v1} is not equal to ${v2}`);
    }
  }

  static arrayEqual(a, b) {
    const throwNotEqualError = () => {
      throw new AssertionError(`[${a}] is not equal to [${b}]`);
    };

    if (a === b) return;
    if (a == null || b == null) {
      throwNotEqualError();
    }
    if (a.length !== b.length) {
      throwNotEqualError();
    }

    a.sort();
    b.sort();

    for (let index = 0; index < a.length; index++) {
      if (a[index] !== b[index]) {
        throwNotEqualError();
      }
    }
  }
}

export default Assert;

class AssertionError extends Error {
  constructor(message) {
    super(message);
    this.name = "AssertionError";
    this.code = "ASSERTION_ERROR";
  }
}
