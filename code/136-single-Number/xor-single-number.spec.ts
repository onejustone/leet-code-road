import {xorSingleNumber} from './xor-single-number';

describe('136.只会出现一次的数', () => {
   it('xorSingleNumber', () => {
       const nums = [4,1,2,1,2];
       let result = xorSingleNumber(nums);
       expect(result).toBe(4);
   })
});
