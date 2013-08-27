var assert = require("assert");
var s = require('../');

describe('slugify', function(){
    it('should slugify simple string', function(){
        assert.equal(s(" s0Me stRIng "), "s0me-string");
    });

    it('should slugify czech string', function(){
        assert.equal(s(" pŘíliš žluťoučký KŮŇ úpěľ žalostné ódy"), "prilis-zlutoucky-kun-upel-zalostne-ody");
    });

    it('should slugify crazy string', function(){
        assert.equal(s("\t \n s€0Me st#ř_În*g \f\r "), "s0me-str_ing");
    });

});