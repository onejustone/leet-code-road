import MinHeap from './min-heap';

describe('min heap', () => {
    it('heap sort', () => {
        const oriArr = [99, 5, 36, 7, 22, 17, 46, 12, 2, 19, 25, 28, 1, 92];
        const minHeap = new MinHeap(oriArr);
        const heapSort = minHeap.heapSort();
        expect(heapSort).toStrictEqual([1, 2, 5, 7, 12, 17, 19, 22, 25, 28, 36, 46, 92, 99]);
    })
});
