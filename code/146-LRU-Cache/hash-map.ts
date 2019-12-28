export default class LRUCache {
    private readonly capacity: number;
    private hashMap: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.hashMap = new Map<number, number>();
    }

    get (key: number) {
        const hasKey = this.hashMap.get(key);
        console.log('000-start')
        console.log(hasKey, 'kye is:', key);
        console.log('000-end')
        if (hasKey) {
            this.put(key, hasKey);
            return hasKey;
        } else {
            return -1;
        }
    }

    put (key: number, value: number) {
        const hasKey = this.hashMap.get(key);

        if (hasKey) {
            this.hashMap.delete(key);
            this.hashMap.set(key, value)
        } else {
            if (this.capacity === this.hashMap.size) {
                const lastKey = this.hashMap.keys().next().value;
                this.hashMap.delete(lastKey);
            }
            this.hashMap.set(key, value)
        }
    }
}
