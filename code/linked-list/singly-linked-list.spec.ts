import SinglyLinkedList from './singly-linked-list';

describe('singlyLinkedList test', () => {
    const nums = [1,2,3,4,5];

    it('remove last 1', () => {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.fromArray(nums);
        singlyLinkedList.removeNthFromEnd(1);
        const resultList = singlyLinkedList.toArray();
        expect(resultList).toEqual([1,2,3,4]);
    });

    it('remove last 2', () => {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.fromArray(nums);
        singlyLinkedList.removeNthFromEnd(2);
        const resultList = singlyLinkedList.toArray();
        expect(resultList).toEqual([1,2,3,5]);
    });

    it('remove last 3', () => {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.fromArray(nums);
        singlyLinkedList.removeNthFromEnd(3);
        const resultList = singlyLinkedList.toArray();
        expect(resultList).toEqual([1,2,4,5]);
    });

    it('remove last 5', () => {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.fromArray(nums);
        singlyLinkedList.removeNthFromEnd(5);
        const resultList = singlyLinkedList.toArray();
        expect(resultList).toEqual([2,3,4,5]);
    });

    it('remove last 1', () => {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.fromArray([1]);
        singlyLinkedList.removeNthFromEnd(1);
        const resultList = singlyLinkedList.toArray();
        expect(resultList).toEqual([]);
    });
});
