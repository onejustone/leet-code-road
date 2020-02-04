import BinarySearchTree from '../binary-tree/binary-search-tree'
import helper from '../binary-tree/helper'
import { recursiveMergeTrees } from './merge-trees'

const recordAllData = (bst: BinarySearchTree): number [] => {
    const out: number[] = [];
    helper.bfsQueueTraversal(bst, (data) => out.push(...data));
    return out;
};

describe('merge trees', () => {
    const tree1 = new BinarySearchTree(4);
    const tree2 = new BinarySearchTree(4);

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
        tree1.insert(2);
        tree1.insert(1);
        tree1.insert(3);
        tree1.insert(5);
        tree1.insert(6);
        tree1.insert(7);

        expect(recordAllData(tree1)).toEqual([4, 2, 5, 1, 3, 6, 7])
    });

    it('should iterate over complex tree inOrderTraversal', () => {
        /**
         *
         * 4
         * |  \
         * 2   6
         * | \  | \
         * 1  3 5  7
         *
         */
        tree2.insert(2);
        tree2.insert(1);
        tree2.insert(3);
        tree2.insert(6);
        tree2.insert(5);
        tree2.insert(7);

        expect(recordAllData(tree2)).toEqual([4, 2, 6, 1, 3, 5, 7])
    });

    it('should merger trees', () => {
        /**
         *     8
         *   |  \
         *  4    11
         * | \  | \
         * 2 6  5 13
         *          \
         *          7
         */
       const mergedTree = recursiveMergeTrees(tree1, tree2);
        expect(recordAllData(mergedTree)).toEqual([8, 4, 11, 2, 6, 5, 13, 7])
    })
});
