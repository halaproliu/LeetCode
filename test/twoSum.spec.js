import { violence, hashmap } from '../src/twoSum'
import { expect } from 'chai'

function test (fn, nums, target, result) {
  expect(fn(nums, target)).include(result[0])
  expect(fn(nums, target)).include(result[1])
  expect(fn(nums, target)[0]).to.equal(result[0])
  expect(fn(nums, target)[1]).to.equal(result[1])
}

describe('violence', () => {
  it('should return the correct index Array', () => {
    test(violence, [2, 7, 11, 15], 9, [0, 1])
    test(violence, [2, 7, 11, 15], 22, [1, 3])
  })
})

describe('hashmap', () => {
  it('should return the correct index Array', () => {
    test(hashmap, [2, 7, 11, 15], 9, [0, 1])
    test(hashmap, [2, 7, 11, 15], 22, [1, 3])
  })
})
