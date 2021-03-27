export class Circular {

    private array: any[]
    private currentIndex: number

    constructor(arr: any[], startingIndex: number) {
        this.array = arr;
        this.currentIndex = startingIndex || 0;
    }

    next = (): any => {
        let i = this.currentIndex, arr = this.array;
        this.currentIndex = i < arr.length - 1 ? i + 1 : 0;
        return this.current()
    }

    previous = (): any => {
        var i = this.currentIndex, arr = this.array;
        this.currentIndex = i > 0 ? i - 1 : arr.length - 1;
        return this.current()
    }

    current = (): any => {
        return this.array[this.currentIndex];
    }
}