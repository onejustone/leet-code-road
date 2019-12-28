import DoublyLinkedList, { Node } from '../linked-list/doubly-linked-list';

interface LRUNode {
   key: number;
   value: number
}

export default class LRUCache {
    private readonly capacity: number;
    private HashMap: Map<number | string, Node> = new Map();
    private DoubleList: DoublyLinkedList<LRUNode> = new DoublyLinkedList();

    constructor(capacity: number) {
        this.capacity = capacity
    }

    public get (key: number): number {
        if (this.HashMap.get(key)) {
           const node = this.HashMap.get(key);
            if (node) {
               this.put(key, node.data);
           }
           return node?.data;
        } else {
            return -1;
        }
    }

    public put (key:number, value: number) {
        const node = this.DoubleList.forgeNode(key, value);
        if (this.HashMap.get(key)) {
            const last = this.HashMap.get(key);
            last && this.DoubleList.remove(last);
            this.DoubleList.unshift(node);
            this.HashMap.set(key, node);
        } else {
            if (this.capacity === this.DoubleList.size) {
                const last = this.DoubleList.pop();
                last && this.HashMap.delete(last.id)
            }

            this.DoubleList.unshift(node);
            this.HashMap.set(key, node);
        }
    }
}
