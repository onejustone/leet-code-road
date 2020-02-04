import BinarySearchTree from './binary-search-tree';
import treeHelper from '../binary-tree/helper';

describe('binary tree helper utils', () => {
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
        const result: number [] = [];
        treeHelper.recursiveInOrderTraversal(tree, (data: number) => result.push(data));

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
    });

    it('should iterate over complex tree iteratorInOrderTraversal', () => {
        const result: number [] = [];
        treeHelper.iteratorInOrderTraversal(tree, (data: number) => result.push(data));

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
    });

    it('should iterate over complex tree preOrderTraversal', () => {
        const result: number [] = [];
        treeHelper.recursivePreOrderTraversal(tree, (data: number) => result.push(data));

        expect(result).toEqual([4, 2, 1, 3, 5, 6, 7])
    });

    it('should iterate over complex tree postOrderTraversal', () => {
        const result: number [] = [];
        treeHelper.recursivePostOrderTraversal(tree, (data: number) => result.push(data));

        expect(result).toEqual([1, 3, 2, 7, 6, 5, 4])
    });

    it('should iterate over complex tree bfsTraversal', () => {
        const result: number [] = [];

        treeHelper.bfsQueueTraversal(tree, (data: []) => result.push(...data));

        expect(result).toEqual([4, 2, 5, 1, 3, 6 ,7])
    });
});
