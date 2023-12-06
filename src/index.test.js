const index = require('./index');
const fc = require('fast-check');

test('Testing concat', () => {
  fc.assert(
    fc.property(fc.string(), fc.string(), (a, b) => {
      const a_orig = a;
      const b_orig = b;
      const result = index.concat(a, b);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(a).toBe(a_orig);
      expect(b).toBe(b_orig);
    }),
  );
});
