import nextPermutation from '../src/nextPermutation'
import { expect } from 'chai'

describe('nextPermutation', () => {
    it('nextPermutation test nums=[1, 2, 3], ans=[1, 3, 2]', () => {
        expect(nextPermutation([1, 2, 3])).to.have.members([1, 3, 2])
    })

    it('nextPermutation test nums=[3, 2, 1], ans=[1, 2, 3]', () => {
        expect(nextPermutation([3, 2, 1])).to.have.members([1, 2, 3])
    })

    it('nextPermutation test nums=[1, 1, 5], ans=[1, 5, 1]', () => {
        expect(nextPermutation([1, 1, 5])).to.have.members([1, 5, 1])
    })
})
