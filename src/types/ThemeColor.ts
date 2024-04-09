import { THEME_COLOR } from "@/constants/ThemeColor";

export type ThemeColor = Number &
  (typeof THEME_COLOR)[keyof typeof THEME_COLOR];
