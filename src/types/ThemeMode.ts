import { THEME_MODE } from "@/constants/ThemeMode";

export type ThemeMode = Number & (typeof THEME_MODE)[keyof typeof THEME_MODE];
