import SinglyLinkedList from './linked-list/singly-linked-list';
import { stdOutInfo } from './utils';

const singlyLinkedList = new SinglyLinkedList();
const nums = [4,1,3,5,2];
singlyLinkedList.fromArray(nums);
stdOutInfo(singlyLinkedList.getHead());
stdOutInfo('fromArray');

singlyLinkedList.removeNthFromEnd(2);
stdOutInfo('removeNthFromEnd 2');
stdOutInfo(singlyLinkedList.getHead());

singlyLinkedList.removeNthFromEnd(1);
stdOutInfo('removeNthFromEnd 1');
stdOutInfo(singlyLinkedList.getHead());

stdOutInfo('removeNthFromEnd 3');
singlyLinkedList.removeNthFromEnd(3);
stdOutInfo(singlyLinkedList.getHead());
