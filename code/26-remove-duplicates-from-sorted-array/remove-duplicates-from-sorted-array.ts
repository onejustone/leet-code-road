function removeDuplicatesFromSortedArray (nums: Array<number>): number {
    const numsLen = nums.length;
    let p = 0;
    let q = 1;

    while (q < numsLen) {
        if (nums[p] !== nums[q]) {
            nums[p + 1] = nums[q];
            p ++;
        }

        q ++;
    }

    return p + 1;
}

removeDuplicatesFromSortedArray([1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]);