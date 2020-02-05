import util from 'util';
import TreeNode from './binary-tree/binary-search-tree'
import treeHelper from './binary-tree/helper';

export function recordTreeDataFromBFS<DataT> (tree: TreeNode | null): DataT[] | undefined {
    const result: DataT [] = [];

    treeHelper.bfsQueueTraversal(tree, (data: DataT[]) => result.push(...data));

    return result;
}

export const stdOutInfo = (info: any) => console.log(util.inspect(info, false, null, true));
// export const flatArray = (arr: []) => arr.reduce((acc: [], cur:[]) => ([...acc, ...cur]), []);
