const { assert } = require('chai');
const foo = require('./closure');

describe("Closure", function() {
    it("remembers lexical scope", function() {
        assert.equal(foo(), "bar");
    });
});