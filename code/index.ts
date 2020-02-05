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

// 声明一个泛型函数类型别名
// 此泛型接收一个目标泛型，并且该函数的返回结果是目标泛型
type Reverse<T> = (args?: any) => T;

function bar<T>(func: Reverse<T>): T {
    return func();
}

bar(() => 2);

type ResultType = ReturnType<typeof bar>

type PromiseType<T> = (...args: any) => Promise<T>

function sayName(name: string, age: number) {
    return `name:${name} age${age}`;
}

// 如果类型 T 可以赋值给 `(...args: any) => R` 则返回 R
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type ReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type stringPromiseType = ReturnType<typeof sayName>;

type myStringPromiseType = MyReturnType<typeof sayName>;

// type PromiseType<T> = (args: any[]) => Promise<T>;

type UnPromisify<T> = T extends (...args: any) => Promise<infer U> ? U : never;
type promiseResult = UnPromisify<typeof sayName>;

type FuncArgsType<T extends (...args: any) => any> = T extends (...args: infer U) => any ? U : never;

function caller<T extends (...args: any) => any>(func: T, ...args: FuncArgsType<T>): ReturnType<T> {
    return func(args);
}

const name = caller(sayName, 'jack', 34);

// function sayName(weight: number, height: number): number {
//     return weight * height;
// }

// type ArgsType = FuncArgsType<typeof sayName>;
// type ResultType = ReturnType<typeof sayName>;


