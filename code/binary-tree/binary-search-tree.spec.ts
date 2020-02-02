import BinarySearchTree from './binary-search-tree';
import {
    recursiveInOrderTraversal,
    iteratorInOrderTraversal,
    recursivePostOrderTraversal,
    recursivePreOrderTraversal,
    bfsQueue
} from './helper';

const traversalTypes = new Map();
traversalTypes.set('inOrderTraversal', recursiveInOrderTraversal);
traversalTypes.set('preOrderTraversal', recursivePreOrderTraversal);
traversalTypes.set('postOrderTraversal', recursivePostOrderTraversal);
traversalTypes.set('iteratorInOrderTraversal', iteratorInOrderTraversal);
traversalTypes.set('bfsTraversal', bfsQueue);

const recordAllData = (bst: BinarySearchTree, traversalType: string = 'inOrderTraversal'): number [] => {
    const out: number[] = [];
    traversalTypes.get(traversalType)(bst, (data: number) => out.push(data));
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

    /**
     *    4
     *   |  \
     *   2   5
     *  | \   \
     *  1  3   6
     *          \
     *           7
     */
    const tree = new BinarySearchTree(4);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);

    it('should iterate over complex tree inOrderTraversal', () => {
        expect(recordAllData(tree)).toEqual([1, 2, 3, 4, 5, 6, 7])
    });

    it('should iterate over complex tree iteratorInOrderTraversal', () => {
        expect(recordAllData(tree, 'iteratorInOrderTraversal')).toEqual([1, 2, 3, 4, 5, 6, 7])
    });

    it('should iterate over complex tree preOrderTraversal', () => {
        expect(recordAllData(tree, 'preOrderTraversal')).toEqual([4, 2, 1, 3, 5, 6, 7])
    });

    it('should iterate over complex tree postOrderTraversal', () => {
        expect(recordAllData(tree, 'postOrderTraversal')).toEqual([1, 3, 2, 7, 6, 5, 4])
    });

    it('should iterate over complex tree bfsTraversal', () => {
        expect(recordAllData(tree, 'bfsTraversal')).toEqual([4, 2, 5, 1, 3, 6 ,7])
    });
});
