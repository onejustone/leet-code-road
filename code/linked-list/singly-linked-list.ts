// 单向链表
export type Consumer<C> = (accept: C) => void;

/**
 * 我们的单链表构造如下，增加一个 head 指针和 tail 指针:
 *
 * head.next => data|data.next => data|data.next
 *                                    ^
 *                                    \\
 *                                    tail
 *
 * 1. 其中 head.next 指向单链表中的第一个节点;
 * 2. tail 指针总是指向单链表中最后一个节点;
 * 3. head.next === tail === null 的时候，我们规定链表为空;
 *
 * 有了 tail 指针以后，我们在针对链表尾部追加一个节点时将会非常方便
 */

export interface IINode {
    value: any;
    next?: IINode | null;
}

export default class SinglyLinkedList {
    // 头指针 value 无意义
    private head: IINode = { value: -1, next: null };

    // 尾指针
    private tail: IINode | null = null;

    private EMPTY_NODE: IINode = { value: undefined, next: null };

    // 暴露链表的头指针
    public getHead = (): IINode | null => this.head;

    // 暴露链表的尾指针
    public getTail = (): IINode | null => this.tail;

    // 构造一个 Node
    private forgeNode(value: any): IINode {
        return { value, next: undefined };
    }

    public isEmpty(): boolean {
        // return this.head.next === this.tail;
        // return this.head === this.tail
        return !this.head.next;
    }

    public length(): number {
        let listSize = 0;
        this.iterate(() => listSize++);
        return listSize;
    }

    public iterate(accept: Consumer<IINode>) {
        let node = this.head.next;

        while (node) {
            accept(node);
            node = node.next;
        }
    }

    /**
     * 在列表头部插入一个节点
     * 时间复杂度 O(1)
     * @param value
     */
    public unshift(value: any): SinglyLinkedList {
        // 构造一个 node 节点
        const node = this.forgeNode(value);

        // 将 head.next 指向的第一个节点引用赋值给新插入的节点
        node.next = this.head?.next;

        // head.next 指向这个新插入的节点
        this.head!.next = node;

        // 插入第一个节点的时候让 tail 指向该节点
        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    /**
     * 移除链表中的第一个节点
     * 时间复杂度 O(1)
     */
    public shift(): SinglyLinkedList {
        if (this.isEmpty()) {
            return this;
        }

        this.head!.next = this.head?.next?.next;

        return this;
    }

    /**
     *
     * 在链表的最后追加一个 node
     * 时间复杂度 O(1)
     * @param value
    */
    public push(value: any): SinglyLinkedList {
        // 构造一个 node 节点
        const node = this.forgeNode(value);

        // 如果链表为空
        if (this.isEmpty()) {
            this.head.next = node;
            this.tail = node;
            return this;
        }

        // 将最后一个节点的 next 指向该 node
        this.tail!.next = node;

        // 将 tail 指向该 node
        this.tail = node;

        return this;
    }

    /**
     * 从链表尾部删除一个节点
     * 因为单链表没有前驱节点，所以删除最后一个节点，需要从第一节点开始遍历，知道链表中的倒数第二个节点
     *  时间复杂度 O(n)
    */

    public pop(): SinglyLinkedList {
        // 链表为空直接返回
        if (!this.head.next) return this;

        // 从链表的第一个节点开始遍历
        let tmpNode = this.head.next;

        // 如果链表中只剩一个节点了，则将链表置空
        if (tmpNode == this.tail) {
            this.head.next = null;
            this.tail = null;
            return this;
        }

        // 遍历链表，直到链表中的倒数第二个节点
        while (tmpNode && tmpNode.next !== this.tail) {
            tmpNode = tmpNode.next!;
        }

        // 将 tail 指向链表中的倒数第二个节点
        this.tail = tmpNode!;

        return this;
    }

    // 删除链表倒数的第 N 个节点 => 删除从列表头开始的第 L - n + 1 个节点
    // 时间复杂度 O(L - n - 1)
    public removeNthFromEnd (reversePos: number) {
        const listLength = this.length();

        if (reversePos < 1 || reversePos > listLength) return this;

        const preNodePos = listLength - reversePos;

        let targetNode = this.head;

        // 将节点移动到 L - n 的位置
        for (let i = 1; i <= preNodePos; i ++) {
            targetNode = targetNode.next!
        }

        // 将 (L - n).next 指向 (L - n +2)
        targetNode!.next = targetNode?.next?.next;

        return this.head.next;
    }

    // 时间复杂度 O(n)
    private deleteFromHead(value: any): boolean {
        let deleted: boolean = false;
        let head = this.head;

        while (head && head.next && head.value === value) {
            this.head.next = this.head?.next?.next || undefined;
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
        let current = this.head.next || this.EMPTY_NODE;

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
        let node = this.head.next;
        while (node) {
            yield node.value;
            node = node.next;
        }
    }

    public toArray(): Array<any> {
        const result: Array<any> = [];
        this.iterate((_) => result.push(_.value));
        return result;
    }

    public fromArray<T>(arr: Array<T>): SinglyLinkedList {
        for (const item of arr) {
            this.push(item);
        }

        return this;
    }
}
