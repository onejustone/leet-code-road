function moveZeroes (nums: Array<number>) {
    const numsLength = nums.length;
    let p = 0;

    for (let q = 0; q < numsLength; q ++) {
        if (nums[q] !== 0) {
            nums[p] = nums[q]
            p ++
        }
    }

    for (let i = p; i < numsLength; i ++) {
        nums[i] = 0
    }

    return nums;
}

moveZeroes([0,0,1,2,3,0]);