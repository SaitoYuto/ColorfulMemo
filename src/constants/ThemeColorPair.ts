import { CodeText } from "@/classes/CodeText";
import { THEME_COLOR } from "@/constants/ThemeColor";
import { ThemeColor } from "@/types/ThemeColor";

export const THEME_COLOR_PAIR: CodeText<ThemeColor> =
  new (class extends CodeText<ThemeColor> {
    protected setup(): void {
      this.append(THEME_COLOR.BLUE, "Blue");
      this.append(THEME_COLOR.RED, "Red");
      this.append(THEME_COLOR.YELLOW, "Yellow");
      this.append(THEME_COLOR.GREEN, "Green");
    }
  })();
