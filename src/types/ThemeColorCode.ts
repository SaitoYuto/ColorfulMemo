import { THEME_COLOR_CODE } from "@/constants/ThemeColorCode";

export type ThemeColorCode = Number &
  (typeof THEME_COLOR_CODE)[keyof typeof THEME_COLOR_CODE];
