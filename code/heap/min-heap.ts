export default class MinHeap<T> {
    public heap: Array<T> = [];

    constructor(arr: T[]) {
        const arrTmp: T[] = [...arr];
        this.create(arrTmp);
    }

    public getHeap (): T[] {
        return this.heap
    }

    /**
     * 建立最小堆
     * @param arr
     */
    create (arr: T[]) {
        arr.forEach(item => this.heap.push(item));
        const heapSize = this.heap.length;

        // 完全二叉树的特性，最后一个非叶子结点的位置 = Math.floor(heapSize / 2) - 1
        const theLastNotLeafNodeIndex = Math.floor(heapSize / 2) - 1;
        console.log(theLastNotLeafNodeIndex, 'theLastNotLeafNodeIndex');
        for (let i = theLastNotLeafNodeIndex; i >=0; i--) {
           this.siftDown(i);
        }
    }

    /**
     * swap heap element
     * @param kIndex
     * @param vIndex
     */
    swap (kIndex:number, vIndex: number) {
        const tmp = this.heap[kIndex];
        this.heap[kIndex] = this.heap[vIndex];
        this.heap[vIndex] = tmp;
    }

    /**
     * 向下调整
     * @param index 需要向下调整的结点位置
     */
    public siftDown (index: number) {
        const heapSize = this.heap.length;

        // 是否继续向下调整的 flag
        let keepSiftDown = true;

        // 临时存放的需要交换的结点位置
        let tmpNodeIndex = index;

        // 如果儿子存在，至少左儿子存在，并且需要继续调整的话
        while ((index * 2 + 1) <= heapSize && keepSiftDown) {
            // 父亲比左儿子大
            if (this.heap[index] > this.heap[index * 2 + 1]) {
               tmpNodeIndex = index * 2 + 1;
            } else {
               tmpNodeIndex = index;
            }

            // 如果右儿子存在
            if (index * 2 + 2 <= heapSize) {
                // 父结点比右儿子大
                if (this.heap[tmpNodeIndex] > this.heap[index * 2 + 2]) {
                    tmpNodeIndex = index * 2 + 2;
                }
            }

            // tmpNodeIndex 和 index 不一样的话，说明有儿子结点比父结点大，需要交换结点位置
            if (tmpNodeIndex !== index) {
                this.swap(tmpNodeIndex, index);
                index = tmpNodeIndex;
            } else {
                keepSiftDown = false
            }
        }

        return;
    }

    /**
     * 删除堆中最小元素
     */
    public deleteMin () {
        const heapTopEle = this.heap[0];

        // 将堆中最后一个元素赋值到堆顶
        this.heap[0] = this.heap[this.heap.length - 1];

        // 删除堆中最后一个元素
        this.heap.pop();

        // 从顶点开始向下调整；
        this.siftDown(0);

        // 返回最小元素
        return heapTopEle;
    }

    /**
     * 堆排序
     * 时间复杂度：O(Nlog N)
     */
    public heapSort () {
        const sortResult: T [] = [];
        const heapSize = this.heap.length;

        for (let i = 0; i < heapSize; i ++) {
            sortResult.push(this.deleteMin());
        }

        return sortResult;
    }
}
