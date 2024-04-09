import { CodeText } from "@/classes/CodeText";
import { THEME_MODE } from "@/constants/ThemeMode";
import { ThemeMode } from "@/types/ThemeMode";

export const THEME_MODE_PAIR: CodeText<ThemeMode> =
  new (class extends CodeText<ThemeMode> {
    protected setup(): void {
      this.append(THEME_MODE.LIGHT, "Light");
      this.append(THEME_MODE.DARK, "Dark");
    }
  })();
