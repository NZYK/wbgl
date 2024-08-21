var RollingNumArray = /** @class */ (function () {
    function RollingNumArray(maxLength) {
        this.items = [];
        this.maxLength = maxLength;
    }
    RollingNumArray.prototype.add = function (item) {
        if (this.items.length >= this.maxLength) {
            this.items.shift(); // 古い値を削除
        }
        this.items.push(item); // 新しい値を追加
    };
    RollingNumArray.prototype.getItems = function () {
        return this.items;
    };
    RollingNumArray.prototype.getAverage = function () {
        var sum = this.items.reduce(function (prev, current) { return prev + current; }, 0);
        return this.items.length > 0 ? sum / this.items.length : 0;
    };
    return RollingNumArray;
}());
export { RollingNumArray };
