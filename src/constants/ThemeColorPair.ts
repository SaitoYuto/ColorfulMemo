import { CodeText } from "@/classes/CodeText";
import { THEME_COLOR_CODE } from "@/constants/ThemeColorCode";
import { ThemeColorCode } from "./../types/ThemeColorCode";

export const THEME_COLOR_PAIR: CodeText<ThemeColorCode> =
  new (class extends CodeText<ThemeColorCode> {
    protected setup(): void {
      this.append(THEME_COLOR_CODE.BLUE, "Blue");
      this.append(THEME_COLOR_CODE.RED, "Red");
      this.append(THEME_COLOR_CODE.YELLOW, "Yellow");
      this.append(THEME_COLOR_CODE.GREEN, "Green");
    }
  })();
