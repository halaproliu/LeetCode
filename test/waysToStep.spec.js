import waysToStep from '../src/waysToStep'
import { expect } from 'chai'

describe('waysToStep', () => {
    it('test n=3', () => {
        expect(waysToStep(3)).to.equal(4)
    })

    it('test n=5', () => {
        expect(waysToStep(5)).to.equal(13)
    })
})
