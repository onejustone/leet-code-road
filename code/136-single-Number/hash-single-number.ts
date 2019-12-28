export const hashSingleNumber = (nums: number[]) => {
   const map = new Map<number, number>();

   nums.forEach((item: number) => {
       const hasItem = map.has(item);
       if (hasItem) {
           map.delete(item)
       } else {
           map.set(item, 1);
       }
   });

   return map.keys().next().value;
};
