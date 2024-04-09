import { defineStore } from "pinia";
import type { Memo } from "@/types/Memo";

export const memo = defineStore("memo", {
  state: () => {
    return {
      memos: [] as Memo[],
    };
  },
  getters: {
    getMemos: (state): Memo[] => {
      return state.memos;
    },
    length: (state): number => {
      return state.memos.length;
    },
  },
  actions: {
    add(memo: Memo): void {
      this.memos.unshift(memo);
    },
    findById(id: string): Memo | undefined {
      return this.memos.find((memo) => memo.id === id);
    },
    updateById(id: string, title: string, content: string): void {
      const target = this.memos.find((memo) => memo.id === id);
      if (!target) {
        return;
      }
      target.title = title;
      target.content = content;
      target.dateTime =
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    },
    removeById(id: string): void {
      this.memos = this.memos.filter((memo) => memo.id !== id);
    },
  },
  persist: {
    storage: localStorage,
  },
});
