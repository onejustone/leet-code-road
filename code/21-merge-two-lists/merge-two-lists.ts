interface ListNode {
    val: number;
    next: ListNode | null;
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
    let header: ListNode = { val: -1, next: null };

    const generateNode = (value: number): ListNode => ({ val: value, next: null});
    const getSorted = (...args: Array<number>) => args.sort();

    while (l1 !== null && l2 !== null) {
        const sortedValue = getSorted(l1.val, l2.val);
        sortedValue.forEach(val => {
            const newNode = generateNode(val);
            header.next = newNode;
            header = newNode;
            // newNode.next = header.next;
            // header.next = newNode;
        });

        l1 = l1.next;
        l2 = l2.next;
    }

    if (l1 !== null) {
        const newNode = generateNode(l1.val);
        // newNode.next = header.next;
        header.next = header;
        header = newNode;
        l1 = l1.next;
    }

    if (l2 !== null) {
        const newNode = generateNode(l2.val);
        // newNode.next = header.next;
        header.next = header;
        header = newNode;
        l2 = l2.next;
    }

    return header;
}
