const { assert } = require('chai');

module.exports = function foo() {
    var bar = "bar"

    function baz() {
        return bar;
    }

    return bam(baz);
}

function bam(baz) {
    return baz();
}