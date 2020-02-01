import BinarySearchTree from './binary-search-tree';

const preOrderTraversal = (bst: BinarySearchTree) => (callback: (data: number) => void) => bst.PreOrderTraversal(callback);
const inOrderTraversal = (bst: BinarySearchTree) => (callback: (data: number) => void) => bst.InOrderTraversal(callback);
const postOrderTraversal = (bst: BinarySearchTree) => (callback: (data: number) => void) => bst.PostOrderTraversal(callback);
const bfsTraversal = (bst: BinarySearchTree) => (callback: (data: number) => void) => bst.BFSQueue(callback);

const traversalTypes = new Map();
traversalTypes.set('inOrderTraversal', inOrderTraversal);
traversalTypes.set('preOrderTraversal', preOrderTraversal);
traversalTypes.set('postOrderTraversal', postOrderTraversal);
traversalTypes.set('bfsTraversal', bfsTraversal);

const recordAllData = (bst: BinarySearchTree, traversalType: string = 'inOrderTraversal'): number [] => {
    const out: number[] = [];
    traversalTypes.get(traversalType)(bst)((data: number) => out.push(data));
    return out;
};

describe('BinarySearchTree', () => {
    it('should retain data', () => {
        expect(new BinarySearchTree(4).data).toEqual(4)
    });

    it('should insert a lesser number to the left', () => {
        const four = new BinarySearchTree(4);
        four.insert(2);

        expect(four.data).toEqual(4);
        expect(four.left.data).toEqual(2);
    });

    it('should insert the same number to the left', () => {
        const four = new BinarySearchTree(4);
        four.insert(4);

        expect(four.data).toEqual(4);
        expect(four.left.data).toEqual(4);
    });

    it('should insert a greater number to the right', () => {
        const four = new BinarySearchTree(4);
        four.insert(5);

        expect(four.data).toEqual(4);
        expect(four.right.data).toEqual(5);
    });

    it('should deal with a complex tree', () => {
        const four = new BinarySearchTree(4);

        four.insert(2);
        four.insert(6);
        four.insert(1);
        four.insert(3);
        four.insert(7);
        four.insert(5);

        expect(four.data).toEqual(4);
        expect(four.left.data).toEqual(2);
        expect(four.left.left.data).toEqual(1);
        expect(four.left.right.data).toEqual(3);
        expect(four.right.data).toEqual(6);
        expect(four.right.left.data).toEqual(5);
        expect(four.right.right.data).toEqual(7);
    });

    it('should iterate over on element', () => {
        expect(recordAllData(new BinarySearchTree(4))).toEqual([4]);
    });

    it('should iterate over smaller element', () => {
        const four = new BinarySearchTree(4);
        four.insert(2);

        expect(recordAllData(four)).toEqual([2, 4]);
    });

    it('should iterate over larger element', () => {
        const four = new BinarySearchTree(4);
        four.insert(5);

        expect(recordAllData(four)).toEqual([4, 5])
    });

    it('should iterate over complex tree inOrderTraversal', () => {
        /**
         *    4
         *   |  \
         *   2   5
         *  | \   \
         *  1  3   6
         *          \
         *           7
         */
        const four = new BinarySearchTree(4);
        four.insert(2);
        four.insert(1);
        four.insert(3);
        four.insert(5);
        four.insert(6);
        four.insert(7);

        expect(recordAllData(four)).toEqual([1, 2, 3, 4, 5, 6, 7])
    });

    it('should iterate over complex tree preOrderTraversal', () => {
        const four = new BinarySearchTree(4);
        four.insert(2);
        four.insert(1);
        four.insert(3);
        four.insert(5);
        four.insert(6);
        four.insert(7);

        expect(recordAllData(four, 'preOrderTraversal')).toEqual([4, 2, 1, 3, 5, 6, 7])
    });

    it('should iterate over complex tree postOrderTraversal', () => {
        /**
         *    4
         *   |  \
         *   2   5
         *  | \   \
         *  1  3   6
         *          \
         *           7
         */
        const four = new BinarySearchTree(4);
        four.insert(2);
        four.insert(1);
        four.insert(3);
        four.insert(5);
        four.insert(6);
        four.insert(7);

        expect(recordAllData(four, 'postOrderTraversal')).toEqual([1, 3, 2, 7, 6, 5, 4])
    });

    it('should iterate over complex tree bfsTraversal', () => {
        /**
         *    4
         *   |  \
         *   2   5
         *  | \   \
         *  1  3   6
         *          \
         *           7
         */
        const four = new BinarySearchTree(4);
        four.insert(2);
        four.insert(1);
        four.insert(3);
        four.insert(5);
        four.insert(6);
        four.insert(7);

        expect(recordAllData(four, 'bfsTraversal')).toEqual([4, 2, 5, 1, 3, 6 ,7])
    });
});
