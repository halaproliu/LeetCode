var longestPalindrome = require('../src/longestPalindrome')
var expect = require('chai').expect

describe('longestPalindrome', function () {
    it('longestPalindrome test aabbcbbdd', function () {
        expect(longestPalindrome('aabbcbbdd')).to.equal('bbcbb')
    })

    it('longestPalindrome test cdaajksbb', function () {
        expect(longestPalindrome('cdaajksbb')).to.equal('bb')
    })
})