import { CodeTextPair } from "@/types/CodeTextPair";

export abstract class CodeText<T> {
  protected list: CodeTextPair<T>[];
  constructor() {
    this.list = [];
    this.setup();
  }
  protected abstract setup(): void;
  protected append(code: T, text: string): void {
    this.list.push({ code: code, text: text });
  }
  public getList(): CodeTextPair<T>[] {
    // Deep copy not to dirt original list
    return JSON.parse(JSON.stringify(this.list));
  }

  public get(code: T): CodeTextPair<T> {
    const pair = this.list.find((set) => set.code == code);
    if (!pair) {
      throw new Error(`Item with code ${code} not found`);
    }
    return pair;
  }

  public getText(code: T): string {
    const set = this.get(code);
    return set.text;
  }
}
