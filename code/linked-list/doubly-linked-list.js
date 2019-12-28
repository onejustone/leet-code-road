export default class DoublyLinkedList {
    constructor() {
        this.head = this.forgeNode('head', 'head');
        this.tail = this.forgeNode('tail', 'tail');
        this.size = 0;
        this.getHead = () => this.head;
        this.getTail = () => this.tail;
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }
    // 时间复杂度 O(1)
    appendToTheEndOfTheList(node) {
        // 将该节点的 previous 指向 tail
        node.previous = this.tail;
        // 将最后一个节点的 next 指向该 node
        this.tail.next = node;
        // 最后将 tail 指向该 node
        this.tail = node;
    }
    forgeNode(id, data) {
        return { id, data, next: null, previous: null };
    }
    // 时间复杂度 O(n)
    deleteFromHead(data) {
        let deleted = false;
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
    // 前向遍历
    traversalForward() {
        const result = [];
        this.iterate(_ => result.push(_));
        return result;
    }
    // 后向遍历
    traversalBackend() {
        const result = [];
        this.iterate((_) => result.push(), true);
        return result;
    }
    iterate(accept, reverse = false) {
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
    unshift(node) {
        // header <=> node <=> .... <=> tail
        node.next = this.head.next;
        node.previous = this.head;
        this.head.next.previous = node;
        this.head.next = node;
        this.size++;
        return node;
    }
    // 从尾部插入：时间复杂度 O(1)
    push(node) {
        // head <=> ... <=> node <=> tail
        node.previous = this.tail.previous;
        this.tail.previous.next = node;
        node.next = this.tail;
        this.tail.previous = node;
        this.size++;
        return node;
    }
    // 时间复杂度 O(1)，删除链表中的 n 节点，n 一定存在
    remove(n) {
        n.previous.next = n.next;
        n.next.previous = n.previous;
        this.size--;
    }
    // 移除最后一个节点
    pop() {
        if (this.isEmpty())
            return null;
        const last = this.tail.previous;
        this.remove(last);
        return last;
    }
    *items() {
        let node = this.head;
        while (node && !this.isEmpty()) {
            yield node.data;
            node = node.next;
        }
    }
    toArray() {
        const result = [];
        this.iterate((_) => result.push(_.data));
        return result;
    }
    fromArray(arr) {
        arr.forEach((item, index) => {
            const node = this.forgeNode(`${index}`, item);
            this.push(node.data);
        });
        return this;
    }
    isEmpty() {
        return this.tail.previous === this.head;
    }
}
