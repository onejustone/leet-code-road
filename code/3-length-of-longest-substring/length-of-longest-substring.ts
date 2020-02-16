function uniqueString (str: string): boolean {
    const strLen = str.length;
    const set = new Set();

    for (let i =0; i<strLen; i ++) {
        if (set.has(str.charAt(i))) return false;
        set.add(str.charAt(i));
    }    
    
    return true;
}

function lengthOfLongestSubstringViolence (str: string): number {
    const strLen = str.length;
    let maxSubLength = 0;

    for (let i = 0; i <= strLen - 1; i ++) {
        for (let j = i + i; j <= strLen; j ++) {
            const subStr = str.slice(i, j)
            const isUniqueStr = uniqueString(subStr);
            if (isUniqueStr) {
                maxSubLength = Math.max(maxSubLength, subStr.length);
            } 
        }
    }

    return maxSubLength;
}

function lengthOfLongestSubstringSlideWindow (str: string): number {
    if (!str) return 0;

    const strLen = str.length;
    const hashMap: Map<string, number> = new Map<string, number>();
    let maxLength: number = 0; 

    let i = 0; 

    for (let j = 0; j < strLen; j ++) {
        if (hashMap.has(str.charAt(j))) {
            i = Math.max(hashMap.get(str.charAt(j)) || 0, i);
        }

        maxLength = Math.max(maxLength, j - i + 1);
        hashMap.set(str.charAt(j), j + 1)
    }

    return maxLength;
}