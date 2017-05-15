export class BasePager<T> {

    public Items: Array<T> = [];
    public Count: number;

    constructor() {
        this.Count = 0;
    }

}