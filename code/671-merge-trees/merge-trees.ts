import BinarySearchTree from '../binary-tree/binary-search-tree'

export function recursiveMergeTrees(tree1: BinarySearchTree, tree2: BinarySearchTree) {
    if (!tree1) return tree2;
    if (!tree2) return tree1;

    tree1.left = recursiveMergeTrees(tree1.left, tree2.left);
    tree1.right = recursiveMergeTrees(tree1.right, tree2.right);

    tree1.data = tree1.data + tree2.data;
    return tree1
}
