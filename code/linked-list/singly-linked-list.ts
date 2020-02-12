// 单向链表
export type Consumer<C> = (accept: C) => void;

export interface IINode {
    value: any | undefined;
    next?: IINode;
}

export default class SinglyLinkedList {
    // 头指针
    private head: IINode | undefined = undefined;
    // 尾指针
    private tail: IINode | undefined = undefined;

    private EMPTY_NODE: IINode = { value: undefined, next: undefined };

    // 暴露链表的头指针
    public getHead = (): IINode | undefined => this.head;

    // 暴露链表的尾指针
    public getTail = (): IINode | undefined => this.tail;

    // 构造一个 Node
    private forgeNode(value: any): IINode {
        return { value, next: undefined };
    }

    public isEmpty(): boolean {
        return !this.head;
    }

    public length(): number {
        let listSize = 0;
        this.iterate(() => listSize++);
        return listSize;
    }

    public iterate(accept: Consumer<IINode>) {
        let node = this.head;

        while (node) {
            accept(node);
            node = node.next;
        }
    }

    // 时间复杂度 O(1)
    public unshift(value: any): SinglyLinkedList {
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
    public shift(): SinglyLinkedList {
        if (this.isEmpty()) {
            return this;
        }

        this.head = this.head?.next || undefined;
        return this;
    }

    // 时间复杂度 O(n)
    public pop(): SinglyLinkedList {
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
    // 在链表的最后追加一个 node
    public push(value: any): SinglyLinkedList {
        // 构造一个 node 节点
        const node = this.forgeNode(value);

        // 如果链表为空
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            return this;
        }

        // 将最后一个节点的 next 指向该 node
        if (this.tail) {
            this.tail.next = node;
        }

        // 将 tail 指向该 node
        this.tail = node;

        return this;
    }

    // 删除链表倒数的第 N 个节点
    // 时间复杂度 O(n - reverseIndex - 1)
    public removeNthFromEnd (reversePos: number) {
        let targetNode = this.head;
        const size = this.length();
        const index = size - reversePos;

        for (let i = 1; i < index; i ++) {
            targetNode = targetNode?.next;
        }

        if (targetNode && targetNode.next) {
            if (this.head === targetNode) {
                this.head = this.head.next
            } else {
                targetNode.next = targetNode.next.next
            }
        }

        return this.head;
    }

    // 时间复杂度 O(n)
    private deleteFromHead(value: any): boolean {
        let deleted: boolean = false;
        let head = this.head;

        while (head && head.next && head.value === value) {
            this.head = this.head?.next || undefined;
            head = this.head;
            deleted = true;
        }

        return deleted;
    }


    // 时间复杂度 O(n)
    public delete(value: any): boolean {
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

    public toArray(): Array<any> {
        const result: Array<any> = [];
        this.iterate((_) => result.push(_.value));
        return result;
    }

    public fromArray(arr: []): SinglyLinkedList {
        for (const item of arr) {
            this.push(item);
        }

        return this;
    }
}
