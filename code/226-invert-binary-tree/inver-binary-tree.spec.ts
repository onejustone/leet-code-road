import TreeNode from '../binary-tree/binary-search-tree';
import { recursiveInvertBinaryTree, iteratorInvertBinaryTreeBFS } from './invert-binary-tree'
import { recordTreeDataFromBFS } from '../utils';

describe('invert binary tree', () => {
    /** origin tree
     *    4
     *   |  \
     *   2   5
     *  | \   \
     *  1  3   6
     *          \
     *           7
     */

    /**
     * invert tree
     *     4
     *    /  \
     *   5   2
     *  /    / \
     *  6   3  1
     *  /
     *  7
     */

    // it('should recursive invert binary tree', () => {
    //     const tree = new TreeNode(4);
    //     tree.insert(2);
    //     tree.insert(1);
    //     tree.insert(3);
    //     tree.insert(5);
    //     tree.insert(6);
    //     tree.insert(7);
    //
    //     const invertTree = recursiveInvertBinaryTree(tree);
    //     const invertTreeData = recordTreeDataFromBFS(invertTree);
    //
    //     expect(invertTreeData).toEqual([4, 5, 2, 6, 3, 1, 7])
    // });

    // it('should iterator invert binary tree', () => {
    //     const invertTree = iteratorInvertBinaryTree(tree);
    //     const invertTreeData = recordTreeDataFromBFS(invertTree);
    //
    //     expect(invertTreeData).toEqual([4, 5, 2, 6, 3, 1, 7])
    // });

    it('should iterator invert binary tree by bfs', () => {
        const tree = new TreeNode(4);
        tree.insert(2);
        tree.insert(1);
        tree.insert(3);
        tree.insert(5);
        tree.insert(6);
        tree.insert(7);

        const invertTree = iteratorInvertBinaryTreeBFS(tree);
        const invertTreeData = recordTreeDataFromBFS(invertTree);

        expect(invertTreeData).toEqual([4, 5, 2, 6, 3, 1, 7])
    });
});
