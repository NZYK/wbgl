export class RollingNumArray<T> {
    private items: Array<number> = [];
    private maxLength: number;

    constructor(maxLength: number) {
        this.maxLength = maxLength;
    }

    add(item: number) {
        if (this.items.length >= this.maxLength) {
            this.items.shift(); // 古い値を削除
        }
        this.items.push(item); // 新しい値を追加
    }

    getItems(): Array<number> {
        return this.items;
    }

    getAverage(): number {
        const sum = this.items.reduce((prev, current) => prev + current, 0);
        return this.items.length > 0 ? sum / this.items.length : 0;
    }
}