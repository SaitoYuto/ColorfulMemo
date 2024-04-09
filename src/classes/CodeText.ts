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
    // リストを汚さないようにDeepCopy
    return JSON.parse(JSON.stringify(this.list));
  }

  public get(code: T): CodeTextPair<T> | undefined {
    return this.list.find((set) => set.code == code);
  }

  public getText(code: T): string | undefined {
    const set = this.get(code);
    return set ? set.text : undefined;
  }
}
