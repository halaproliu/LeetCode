import threeSum from '../src/threeSum'
import { expect } from 'chai'

function isAllTrue (arr, expectedArr) {
    let expectedStr = JSON.stringify(expectedArr)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let str = JSON.stringify(arr[i])
        sum += Number(!!expectedStr.includes(str))
    }
    return sum === arr.length
}

describe('threeSum', () => {
    it('test [-1, 0, 1, 2, -1, -4]', () => {
        let arr = [-1, 0, 1, 2, -1, -4]
        let res = [
            [-1, 0, 1],
            [-1, -1, 2]
        ]
        expect(isAllTrue(threeSum(arr), res)).to.equal(true)
    })
})
