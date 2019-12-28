import {hashSingleNumber} from './hash-single-number'

describe('136.只会出现一次的数', () => {
    it('hashSingleNumber', () => {
        const nums = [4,1,2,1,2];
        let result = hashSingleNumber(nums);
        expect(result).toBe(4);
    })
});
