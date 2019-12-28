# 链表

[链表（Linked list）-wiki](https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8)是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针(Pointer)。由于不必须按顺序存储，链表在插入的时候可以达到O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而顺序表相应的时间复杂度分别是O(logn)和O(1)。

大多数情况下 javascript 开发关心的是 "数据的逻辑结构" 而非 "数据的存储结构"，似乎 "链表" 跟 javascript 开发没什么关系。但是，"链表" 在一些情况下能有效提升代码的性能，特别是在H5游戏或者大数据场景中。

其实绝大多数情况下 javascript 的数组都可以实现链表的工作，并且它提供了一系列成熟的 APIs (unshift/pop/shift/push...)，但是若果我们需要频繁的向数组进行插入和删除操作，由于 `unshift/pop/shift/push` 的时间富足的都是 O(n)，所以这种情况下 "链表" 肯能是更好的选择。

## ref

[js创建一条通用链表](https://aotu.io/notes/2017/10/13/make-a-chain-class/index.html)

[generic-linkedlist-with-typescript](https://itnext.io/generic-linkedlist-with-typescript-7bc8a14b63b6)

[leetcode-typescript](https://github.com/maohhgg/leetcode)

[GeeksforGeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
