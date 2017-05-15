export class LocalStorage {

    public static Set(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    public static Get(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    public static Remove(key: string): void {
        localStorage.removeItem(key);
    }

}
