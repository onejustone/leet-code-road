// 双向链表
export type Consumer<T> = (accept: T) => void;

export interface Node {
    previous: any;
    next: any;
    data: any;
    id: number | string;
}

export default class DoublyLinkedList<T> {
    private head: Node = this.forgeNode('head', 'head');
    private tail: Node = this.forgeNode('tail', 'tail');

    public size: number = 0;

    constructor() {
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    // 时间复杂度 O(1)
    private appendToTheEndOfTheList(node: Node) {
        // 将该节点的 previous 指向 tail
        node.previous = this.tail;
        // 将最后一个节点的 next 指向该 node
        this.tail.next = node;
        // 最后将 tail 指向该 node
        this.tail = node;
    }

    public forgeNode(id: string|number, data: any): Node {
        return {id, data, next: null, previous: null};
    }

    // 时间复杂度 O(n)
    private deleteFromHead(data: T): boolean {
        let deleted: boolean = false;
        let head = this.head;

        while (head && head.data === data) {
            this.head = this.head.next;
            if (this.head) {
                this.head.previous = undefined;
            }
            this.size--;
            head = this.head;
            deleted = true;
        }

        return deleted;
    }

    public getHead = (): Node => this.head;
    public getTail = (): Node => this.tail;

    // 前向遍历
    public traversalForward(): Node[] {
        const result: Node[] = [];
        this.iterate(_ => result.push(_));
        return result;
    }

    // 后向遍历
    public traversalBackend(): Node[] {
        const result: Node[] = [];
        this.iterate((_) => result.push(), true);
        return result;
    }

    public iterate(accept: Consumer<Node>, reverse: boolean = false) {
        if (!reverse) {
            let first = this.head.next;
            while (first && first !== this.tail) {
                accept(first);
                first = first.next;
            }
            return;
        }

        let last = this.tail;
        while (last && last !== this.head) {
            accept(last);
            last = last.previous;
        }
    }

    // 从头部插入：时间复杂度 O(1)
    public unshift(node: Node): Node {
        // header <=> node <=> .... <=> tail
        node.next = this.head.next;
        node.previous = this.head;

        this.head.next.previous = node;
        this.head.next = node;

        this.size++;

        return node;
    }

    // 从尾部插入：时间复杂度 O(1)
    public push(node: Node): Node {
        // head <=> ... <=> node <=> tail
        node.previous = this.tail.previous;
        this.tail.previous.next = node;

        node.next = this.tail;
        this.tail.previous = node;

        this.size++;
        return node;
    }

    // 时间复杂度 O(1)，删除链表中的 n 节点，n 一定存在
    public remove(n: Node) {
        n.previous.next = n.next;
        n.next.previous = n.previous;
        this.size--;
    }

    // 移除最后一个节点
    public pop(): Node | null {
        if (this.isEmpty()) return null;

        const last = this.tail.previous;
        this.remove(last);

        return last;
    }

    public* items() {
        let node = this.head;
        while (node && !this.isEmpty()) {
            yield node.data;
            node = node.next;
        }
    }

    public toArray(): T[] {
        const result: T[] = [];
        this.iterate((_) => result.push(_.data as T));
        return result;
    }

    public fromArray(arr: T[]): DoublyLinkedList<T> {
        arr.forEach((item, index) => {
            const node = this.forgeNode(`${index}`, item);
            this.push(node.data);
        });

        return this;
    }

    public isEmpty(): boolean {
        return this.tail.previous === this.head;
    }
}
