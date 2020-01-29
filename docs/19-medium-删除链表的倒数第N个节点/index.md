# 19-medium-删除链表的倒数第N个节点

## 方案一：单链表：一次遍历

```typescript
// 时间复杂度 O(n - reverseIndex - 1)
    public removeNthFromEnd (reversePos: number) {
        let targetNode = this.head;
        const size = this.size();
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
```

### 完整代码

[完整代码](../../code/linked-list/singly-linked-list.spec.ts ':include :type=code typescript')

