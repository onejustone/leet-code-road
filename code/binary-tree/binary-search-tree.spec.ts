import BinarySearchTree from './binary-search-tree';
import treeHelper from '../binary-tree/helper';

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
        const result: number [] = [];

        treeHelper.recursiveInOrderTraversal(new BinarySearchTree(4), (data: number) => result.push(data));

        expect(result).toEqual([4]);
    });

    it('should iterate over smaller element', () => {
        const result: number [] = [];

        const tree = new BinarySearchTree(4);
        tree.insert(2);

        treeHelper.recursiveInOrderTraversal(tree, (data: number) => result.push(data));
        expect(result).toEqual([2, 4]);
    });

    it('should iterate over larger element', () => {
        const result: number [] = [];

        const tree = new BinarySearchTree(4);
        tree.insert(5);

        treeHelper.recursiveInOrderTraversal(tree, (data: number) => result.push(data));
        expect(result).toEqual([4, 5])
    });
});
