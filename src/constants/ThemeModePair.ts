import { CodeText } from "@/classes/CodeText";
import { THEME_MODE } from "@/constants/ThemeMode";
import { THEME_MODE_CODE } from "@/constants/ThemeModeCode";
import { ThemeModeCode } from "@/types/ThemeModeCode";

export const THEME_MODE_PAIR: CodeText<ThemeModeCode> =
  new (class extends CodeText<ThemeModeCode> {
    protected setup(): void {
      this.append(THEME_MODE_CODE.LIGHT, THEME_MODE.LIGHT);
      this.append(THEME_MODE_CODE.DARK, THEME_MODE.DARK);
    }
  })();
