// 单向链表
export type Consumer<C> = (accept: C) => void;

interface IINode<T> {
    value: T | undefined;
    next?: IINode<T>;
}

export default class SinglyLinkedList<T> {
    private head: IINode<T> | undefined = undefined;
    private tail: IINode<T> | undefined = undefined;
    private EMPTY_NODE: IINode<T> = { value: undefined, next: undefined };

    // 时间复杂度 O(1)
    private appendToTheEndOfTheList(node: IINode<T>) {
        // 将最后一个节点的 next 指向该 node
        if (this.tail) {
            this.tail.next = node;
        }

        // 将 tail 指向该 node
        this.tail = node;
    }

    private forgeNode(value: T): IINode<T> {
        return { value, next: undefined };
    }

    // 时间复杂度 O(n)
    private deleteFromHead(value: T): boolean {
        let deleted: boolean = false;
        let head = this.head;

        while (head && head.next && head.value === value) {
            this.head = this.head?.next || undefined;
            head = this.head;
            deleted = true;
        }

        return deleted;
    }

    public getHead = (): IINode<T> | undefined => this.head;
    public getTail = (): IINode<T> | undefined => this.tail;

    public size(): number {
        let listSize = 0;
        this.iterate(() => listSize++);
        return listSize;
    }

    public iterate(accept: Consumer<IINode<T>>) {
        let node = this.head;

        while (node) {
            accept(node);
            node = node.next;
        }
    }

    // 时间复杂度 O(1)
    public unshift(value: T): SinglyLinkedList<T> {
        // 构造一个 node 节点
        const node = this.forgeNode(value);

        // 将 head 指向的第一个节点引用赋值给新插入的节点
        node.next = this.head;

        // head 指向这个新插入的节点
        this.head = node;

        // 插入第一个节点的时候让 tail 指向该节点
        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    // 时间复杂度 O(1)
    public shift(): SinglyLinkedList<T> {
        if (this.isEmpty()) {
            return this;
        }

        this.head = this.head?.next || undefined;
        return this;
    }

    // 时间复杂度 O(n)
    public pop(): SinglyLinkedList<T> {
        if (this.isEmpty()) {
            return this;
        }

        let tmpNode = this.head;

        // 判断第一个节点是否相等
        if (tmpNode === this.tail) {
            this.head = undefined;
            this.tail = undefined;
        } else {
            while (tmpNode?.next && tmpNode.next !== this.tail) {
                tmpNode = tmpNode.next;
            }

            tmpNode && (tmpNode.next = undefined);
            this.tail = tmpNode;
        }

        return this;
    }

    // 时间复杂度 O(1)
    public push(value: T): SinglyLinkedList<T> {
        // 构造一个 node 节点
        const node = this.forgeNode(value);

        // 如果链表为空
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            return this;
        }

        // 在链表的最后追加一个 node
        this.appendToTheEndOfTheList(node);
        return this;
    }

    // 时间复杂度 O(n)
    public delete(value: T): boolean {
        let deleted: boolean = false;

        if (this.isEmpty()) {
            return deleted;
        }

        deleted = this.deleteFromHead(value);
        let current = this.head || this.EMPTY_NODE;

        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                deleted = true;
            } else {
                current = current.next;
            }
        }

        if (this.tail?.value === value) {
            this.tail = current;
        }

        return deleted;
    }

    public *items() {
        let node = this.head;
        while (node) {
            yield node.value;
            node = node.next || undefined;
        }
    }

    public toArray(): T[] {
        const result: T[] = [];
        this.iterate((_) => result.push(_.value as T));
        return result;
    }

    public fromArray(arr: T[]): SinglyLinkedList<T> {
        for (const item of arr) {
            this.push(item);
        }

        return this;
    }

    public isEmpty(): boolean {
        return !this.head;
    }
}
