export default class BinarySearchTree {
    private _data: number;
    private _left?: BinarySearchTree;
    private _right?: BinarySearchTree;

    constructor(data: number) {
        this._data = data;
    }

    public get data (): number {
        return this._data!
    }

    public set data (value) {
        this._data = value
    }

    public get left (): BinarySearchTree {
        return this._left!
    }

    public set left (tree: BinarySearchTree) {
        this._left = tree;
    }

    public get right (): BinarySearchTree {
        return this._right!
    }

    public set right (tree: BinarySearchTree) {
        this._right = tree;
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
