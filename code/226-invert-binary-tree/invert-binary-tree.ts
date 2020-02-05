import TreeNode from '../binary-tree/binary-search-tree'

/**
 * 使用递归反转二叉树
 * @param root
 */
export function recursiveInvertBinaryTree(root: TreeNode): TreeNode | null {
    if (!root) return null;

    const tmpLeft = root.left;
    root.left = recursiveInvertBinaryTree(root.right)!;
    root.right = recursiveInvertBinaryTree(tmpLeft)!;

    return root;
}

/**
 * 使用迭代进行 DFS 优先搜索
 * @param root
 *
 */
// export function iteratorInvertBinaryTree(root: TreeNode): TreeNode | null {
//     const stack = [];
//
//     let curr: TreeNode = root;
//
//     while (curr || stack.length !== 0) {
//         while (curr) {
//             const currLeft = curr.left;
//
//             curr.left = curr.right;
//             curr.right = currLeft;
//
//             stack.push(curr);
//             curr = curr.right;
//         }
//
//         curr = stack.pop()!;
//
//         if (curr.left) {
//             curr = curr.left;
//         }
//     }
//
//     return curr;
// }

/**
 *
 * 使用迭代进行 BFS 优先遍历
 * @param root
 */
export function iteratorInvertBinaryTreeBFS(root: TreeNode) {
    const queue: TreeNode[] = [];

    queue.push(root);

    while (queue.length !== 0) {
        const currentNode = queue.shift()!;

        // if (!currentNode) continue;

        const tmpLeft = currentNode.left;
        currentNode.left = currentNode.right;
        currentNode.right = tmpLeft;

        if (currentNode.left) {
            queue.push(currentNode.left)
        }

        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }

    return root;
}

