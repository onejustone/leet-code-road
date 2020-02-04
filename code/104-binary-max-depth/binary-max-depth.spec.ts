import BinarySearchTree from '../binary-tree/binary-search-tree'
import { binaryMaxDepthRecursive, binaryMaxDepthIteratorDFS } from './binary-max-depth';

describe('computed binary max depth', () => {
    /**
     *    4
     *   |  \
     *   2   5
     *  | \   \
     *  1  3   6
     *          \
     *           7
     *            \
     *             8
     */
    const tree = new BinarySearchTree(4);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);
    tree.insert(8);

    it('computed binary max depth recursive', () => {
        const maxDepth = binaryMaxDepthRecursive(tree);
        expect(maxDepth).toBe(5);
    });

    it('computed binary max depth iterator', () => {
        const maxDepth = binaryMaxDepthIteratorDFS(tree);
        expect(maxDepth).toBe(5);
    })
});
