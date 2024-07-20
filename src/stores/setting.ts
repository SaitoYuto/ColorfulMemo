import { BUTTON_VARIANT } from "@/constants/ButtonVariant";
import { BUTTON_VARIANT_CODE } from "@/constants/ButtonVariantCode";
import { COLOR_ATTR } from "@/constants/ColorAttr";
import { THEME_COLOR_CODE } from "@/constants/ThemeColorCode";
import { THEME_MODE } from "@/constants/ThemeMode";
import { THEME_MODE_CODE } from "@/constants/ThemeModeCode";
import { ButtonVariantCode } from "@/types/ButtonVariantCode";
import { ThemeColorCode } from "@/types/ThemeColorCode";
import { ThemeModeCode } from "@/types/ThemeModeCode";
import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state: () => {
    return {
      themeModeCode: THEME_MODE_CODE.LIGHT as ThemeModeCode,
      themeColorCode: THEME_COLOR_CODE.DEFAULT as ThemeColorCode,
      buttonVariantCode: BUTTON_VARIANT_CODE.TONAL as ButtonVariantCode,
    };
  },
  getters: {
    getThemeModeCode: (state): ThemeModeCode => {
      return state.themeModeCode;
    },
    getThemeColorCode: (state): ThemeColorCode => {
      return state.themeColorCode;
    },
    getButtonVariantCode: (state): ButtonVariantCode => {
      return state.buttonVariantCode;
    },
    getThemeMode: () => {
      return (themeModeCode: ThemeModeCode) => {
        switch (themeModeCode) {
          case THEME_MODE_CODE.LIGHT:
            return THEME_MODE.LIGHT;
          case THEME_MODE_CODE.DARK:
            return THEME_MODE.DARK;
          default:
            return THEME_MODE.LIGHT;
        }
      };
    },
    getThemeColorConst: () => {
      return (colorCode: ThemeColorCode) => {
        switch (colorCode) {
          case THEME_COLOR_CODE.BLUE:
            return COLOR_ATTR.BLUE;
          case THEME_COLOR_CODE.RED:
            return COLOR_ATTR.RED;
          case THEME_COLOR_CODE.YELLOW:
            return COLOR_ATTR.YELLOW;
          case THEME_COLOR_CODE.GREEN:
            return COLOR_ATTR.GREEN;
          default:
            return COLOR_ATTR.DEFAULT;
        }
      };
    },
    getButtonVariantConst: () => {
      return (buttonVariantCode: ButtonVariantCode) => {
        switch (buttonVariantCode) {
          case BUTTON_VARIANT_CODE.TEXT:
            return BUTTON_VARIANT.TEXT;
          case BUTTON_VARIANT_CODE.TONAL:
            return BUTTON_VARIANT.TONAL;
          case BUTTON_VARIANT_CODE.FLAT:
            return BUTTON_VARIANT.FLAT;
          case BUTTON_VARIANT_CODE.ELEVATED:
            return BUTTON_VARIANT.ELEVATED;
          case BUTTON_VARIANT_CODE.OUTLINED:
            return BUTTON_VARIANT.OUTLINED;
          case BUTTON_VARIANT_CODE.PLAIN:
            return BUTTON_VARIANT.PLAIN;
          default:
            return BUTTON_VARIANT.TONAL;
        }
      };
    },
  },
  persist: {
    storage: localStorage,
  },
});
