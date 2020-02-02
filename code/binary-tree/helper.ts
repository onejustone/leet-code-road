import TreeNode from './binary-search-tree'

/**
 * DFS 递归 中序遍历: left => root => right
 */
export function recursiveInOrderTraversal(tree: TreeNode, callback: (data: any) => void) {
    if (!tree) {
        return callback(null);
    }

    if (tree.left) {
        recursiveInOrderTraversal(tree.left, callback);
    }

    callback(tree.data);

    if (tree.right) {
        recursiveInOrderTraversal(tree.right, callback)
    }
}

/**
 * DFS 迭代 中序遍历: left => root => right
 * @param root
 * @param callback
 */
export function iteratorInOrderTraversal(root: TreeNode, callback: (data: any) => void) {
    const stack: TreeNode [] = [];

    let curr: TreeNode | undefined = root;

    while (curr || stack.length !== 0) {
        // 将左子树的节点推入到 stack 中
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        // 从栈底部开始依次取出栈中最后一个元素
        curr = stack.pop();

        // 获取节点数据
        callback(curr!.data);

        // 遍历当前节点的右节点
        curr = curr!.right;
    }
}

/**
 * DFS 递归 前序遍历 root => left => right
 */
export function recursivePreOrderTraversal(tree: TreeNode, callback: (data: any) => void) {
    if (!tree) {
        return callback(null);
    }

    callback(tree.data);

    if (tree.left) {
        recursivePreOrderTraversal(tree.left, callback);
    }

    if (tree.right) {
        recursivePreOrderTraversal(tree.right, callback)
    }
}

/**
 * DFS 递归 后续遍历 left => right => root
 */
export function recursivePostOrderTraversal(tree: TreeNode, callback: (data: any) => void) {
    if (!tree) {
        return callback(null);
    }

    if (tree.left) {
        recursivePostOrderTraversal(tree.left, callback);
    }

    if (tree.right) {
        recursivePostOrderTraversal(tree.right, callback)
    }

    callback(tree.data);
}

/**
 *
 * BFS 广度优先遍历（层次优先遍历）队列实现
 * @param root
 * @param callback
 */
export function bfsQueueTraversal(root: TreeNode, callback: (data: any) => void) {
    if (!root) return;

    const queue: TreeNode[] = [];

    queue.push(root);

    while (queue.length !== 0) {
        const tmpNode = queue.shift();

        callback(tmpNode!.data);

        if (tmpNode!.left) {
            queue.push(tmpNode!.left);
        }

        if (tmpNode!.right) {
            queue.push(tmpNode!.right);
        }
    }
}

export  default {
    recursiveInOrderTraversal,
    recursivePreOrderTraversal,
    recursivePostOrderTraversal,
    iteratorInOrderTraversal,
    bfsQueueTraversal
}

