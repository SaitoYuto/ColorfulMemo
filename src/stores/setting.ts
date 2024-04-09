import { COLOR_ATTR } from "@/constants/ColorAttr";
import { THEME_COLOR } from "@/constants/ThemeColor";
import { THEME_MODE } from "@/constants/ThemeMode";
import { ThemeColor } from "@/types/ThemeColor";
import { ThemeMode } from "@/types/ThemeMode";

import { defineStore } from "pinia";

export const setting = defineStore("setting", {
  state: () => {
    return {
      themeMode: THEME_MODE.LIGHT as ThemeMode,
      themeColor: THEME_COLOR.BLUE as ThemeColor,
    };
  },
  getters: {
    getThemeMode: (state): ThemeMode => {
      return state.themeMode;
    },
    getThemeColor: (state): ThemeColor => {
      return state.themeColor;
    },
    getThemeColorConst: (state) => {
      switch (state.themeColor) {
        case THEME_COLOR.BLUE:
          return COLOR_ATTR.BLUE;
        case THEME_COLOR.RED:
          return COLOR_ATTR.RED;
        case THEME_COLOR.YELLOW:
          return COLOR_ATTR.YELLOW;
        case THEME_COLOR.GREEN:
          return COLOR_ATTR.GREEN;
        default:
          return COLOR_ATTR.DEFAULT;
      }
    },
  },
  actions: {
    setThemeMode(themeMode: ThemeMode): void {
      this.themeMode = themeMode;
    },
    setThemeColor(themeColor: ThemeColor): void {
      this.themeColor = themeColor;
    },
    isLightMode(): boolean {
      return this.themeMode == THEME_MODE.LIGHT;
    },
  },
  persist: {
    storage: localStorage,
  },
});
