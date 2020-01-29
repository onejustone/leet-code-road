import SinglyLinkedList from './singly-linked-list';

const singlyLinkedList = new SinglyLinkedList();

describe('singlyLinkedList test', () => {
    it('removeNthFromEnd', () => {
        const nums = [4,1,3,5,2];
        singlyLinkedList.fromArray(nums);
        const result = singlyLinkedList.removeNthFromEnd(2);
        const head = singlyLinkedList.getHead();
        expect(result).toBe(head);
    });
});
