# 19-medium-删除链表的倒数第N个节点

[19.删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-by-l/)

题目描述：

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

```text
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

说明：
给定的 n 保证是有效的。

## 方案一：两次遍历

思路：

因为是单链表，我们没法直接从链表尾部开始删除，所幸我们可以简化一下这个问题，链表的倒数第 `n` 个节点 = 从链表头开始的第 `L - n + 1` 个节点，其中 `L` 是链表的长度。然后只需要将 `(L - n).next` 指向 `(L - n + 2)` 就可以。

算法：


```typescript
// 时间复杂度 O(n - reverseIndex - 1)
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
```

### 完整代码

[完整代码](/code/linked-list/singly-linked-list.spec.ts)

