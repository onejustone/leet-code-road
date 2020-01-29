export default class BinarySearchTree {
    private readonly _data: number;
    private _left?: BinarySearchTree;
    private _right?: BinarySearchTree;

    constructor(data: number) {
        this._data = data;
    }

    public get data (): number {
        return this._data!
    }

    /**
     * DFS 中序遍历: left => root => right
     * @param callback
     */
    public InOrderTraversal (callback: (data: number) => void): void {
        if (this._left) {
            this._left.InOrderTraversal(callback);
        }

        callback(this._data);

        if (this._right) {
            this._right.InOrderTraversal(callback)
        }
    }

    /**
     * DFS 前序遍历 root => left => right
     * @param callback
     * @constructor
     */
    public PreOrderTraversal (callback: (data: number) => void): void {
       callback(this.data);

       if (this._left) {
           this._left.PreOrderTraversal(callback)
       }

       if (this._right) {
           this._right.PreOrderTraversal(callback)
       }
    }

    /**
     * DFS 后续遍历 left => right => root
     * @param callback
     * @constructor
     */
    public PostOrderTraversal (callback: (data: number) => void): void {
        if (this._left) {
            this._left.PostOrderTraversal(callback);
        }

        if (this._right) {
            this._right.PostOrderTraversal(callback);
        }

        callback(this.data)
    }

    /**
     * BFS 广度优先遍历（层次优先遍历）队列实现
     * @param callback
     * @constructor
     */
    public BFSQueue (callback: (data: number) => void): void {
        const queue: BinarySearchTree[] = [];

        queue.push(this);

        while (queue.length !== 0) {
            const tmpNode = queue.shift();

            callback(this.data);

            if (this._left) {
                tmpNode.push(this._left);
            }

            if (this._right) {
                tmpNode.push(this._right);
            }
        }
    }

    public get left (): BinarySearchTree {
        return this._left!
    }

    public get right (): BinarySearchTree {
        return this._right!
    }

    public insert (value: number): BinarySearchTree {
        return value <= this._data ? this.insertLeft(value) : this.insertRight(value);
    }

    private insertLeft (value: number): BinarySearchTree {
        if (!this._left) {
            this._left = new BinarySearchTree(value)
        } else {
            this._left.insert(value);
        }

        return this;
    }

    public insertRight (value: number) {
        if (!this._right) {
            this._right = new BinarySearchTree(value)
        } else {
            this._right.insert(value)
        }

        return this;
    }
}
