import { CodeText } from "@/classes/CodeText";
import { THEME_COLOR } from "@/constants/ThemeColor";
import { THEME_COLOR_CODE } from "@/constants/ThemeColorCode";
import { ThemeColorCode } from "@/types/ThemeColorCode";

export const THEME_COLOR_PAIR: CodeText<ThemeColorCode> =
  new (class extends CodeText<ThemeColorCode> {
    protected setup(): void {
      this.append(THEME_COLOR_CODE.DEFAULT, THEME_COLOR.DEFAULT);
      this.append(THEME_COLOR_CODE.BLUE, THEME_COLOR.BLUE);
      this.append(THEME_COLOR_CODE.RED, THEME_COLOR.RED);
      this.append(THEME_COLOR_CODE.YELLOW, THEME_COLOR.YELLOW);
      this.append(THEME_COLOR_CODE.GREEN, THEME_COLOR.GREEN);
    }
  })();
