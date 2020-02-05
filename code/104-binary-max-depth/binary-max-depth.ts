import TreeNode from '../binary-tree/binary-search-tree'

// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

/**
 * 方案一：递归，进行 DFS 遍历
 * @param root
 */
export function binaryMaxDepthRecursive  (root: TreeNode): number {
   if (!root) return 0;

   const leftHeight = binaryMaxDepthRecursive(root.left);

   const rightHeight = binaryMaxDepthRecursive(root.right);

   return Math.max(leftHeight, rightHeight) + 1;
}

/**
 * 方案二：迭代，使用栈进行 DFS 遍历
 * @param root
 */
interface StackNode {
   node: TreeNode;
   deep: number
}

export function binaryMaxDepthIteratorDFS(root: TreeNode) {
    const stack: StackNode [] = [];

    let curr: TreeNode = root;
    let maxDepth = 0;
    let deep = 0;

    // 若是 curr 存在，则说明还有一些节点的左子树未探索
    // 若是 tack 非空，则说明还有一些节点的右子树未探索
    while (curr || stack.length !== 0) {

        // 先往左走，将 root 所有的左节点推入 stack 中
        while (curr) {
            // 将当前节点的 deep 保存起来
            stack.push({ node: curr, deep: ++deep });
            curr = curr.left;
        }

        // 若左边无路，则准备右拐；
        const prevNode = stack.pop()!;
        curr = prevNode.node;
        deep = prevNode.deep;

        // 右拐之前，记录当前节点的深度和之前存储的最大深度
        if (maxDepth < deep) {
            maxDepth = deep
        }

        // 左叶子节点的父节点有又节点的话，则向右拐
        curr = curr?.right
    }

    return maxDepth;
}

export interface QueueElement {
   node: TreeNode;
   deep: number;
}

/**
 * 方案三：迭代，使用队列 bsf 宽度遍历
 * @param root
 */
export function binaryMaxDepthIteratorBFS(root: TreeNode) {

}
