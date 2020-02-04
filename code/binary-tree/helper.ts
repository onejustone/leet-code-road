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
 * @param flat
 */
export function bfsQueueTraversal(root: TreeNode, callback: (data: any) => void, flat : boolean= true) {
    if (!root) return;

    // 使用一个队列缓存没一层的节点
    const queue: TreeNode[] = [];

    const levels: Array<Array<number>> = [];

    // 将根节点推入队列，也是第一层
    queue.push(root);

    // 记录当前层级
    let level = 0;

    while (queue.length !== 0) {
        // queue 的长度即是当前层中的元素个数
        const currentLevelCount = queue.length;

        // 初始化当前层
        levels[level] = [];

        // 依次遍历当前层的元素
        for (let i = 0; i < currentLevelCount; i ++) {
            const node = queue.shift()!;
            levels[level].push(node.data);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        level ++;
    }

    const flatArray = <T>(arr: Array<Array<T>>) => arr.reduce((acc, cur): Array<T> => {
        if (cur instanceof Array) {
            return [...acc, ...cur];
        }

        return [...acc, cur]
    });

    flat ? callback(flatArray(levels)): callback(levels);
}

export  default {
    recursiveInOrderTraversal,
    recursivePreOrderTraversal,
    recursivePostOrderTraversal,
    iteratorInOrderTraversal,
    bfsQueueTraversal
}

