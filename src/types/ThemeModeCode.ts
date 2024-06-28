import { THEME_MODE_CODE } from "@/constants/ThemeModeCode";

export type ThemeModeCode = Number &
  (typeof THEME_MODE_CODE)[keyof typeof THEME_MODE_CODE];
