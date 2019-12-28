// import LRUCache from './LRU-Cache/hash-linked-list';
import LRUCache from './146-LRU-Cache/hash-map';

// import { stdOutInfo } from './utils';

const cache = new LRUCache(2);
cache.put(2, 1);
cache.put(2, 2);
console.log(cache.get(2)) ;       // 返回  1
cache.put(1, 1);    // 该操作会使得密钥 2 作废
cache.put(4, 1);    // 该操作会使得密钥 1 作废
console.log(cache.get(2));       // 返回 -1 (未找到)

const arr1 = ["LRUCache","put","put","get","put","get","put","get","get","get"];
const arr2 = [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]];
