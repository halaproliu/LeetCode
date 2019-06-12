const twoSum = require('../src/twoSum')
const violence = twoSum.violence
const hashmap = twoSum.hashmap
const chai = require('chai')
const expect = chai.expect

function test(fn, nums, target, result) {
  expect(fn(nums, target)).include(result[0])
  expect(fn(nums, target)).include(result[1])
  expect(fn(nums, target)[0]).to.equal(result[0])
  expect(fn(nums, target)[1]).to.equal(result[1])
}

describe('violence', function() {
  it('should return the correct index Array', function() {
    test(violence, [2, 7, 11, 15], 9, [0, 1])
    test(violence, [2, 7, 11, 15], 22, [1, 3])
  })
})

describe('hashmap', function() {
  it('should return the correct index Array', function() {
    test(hashmap, [2, 7, 11, 15], 9, [0, 1])
    test(hashmap, [2, 7, 11, 15], 22, [1, 3])
  })
})
