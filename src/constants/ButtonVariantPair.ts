import { BUTTON_VARIANT } from "@/constants/ButtonVariant";
import { CodeText } from "@/classes/CodeText";
import { BUTTON_VARIANT_CODE } from "@/constants/ButtonVariantCode";
import { ButtonVariantCode } from "@/types/ButtonVariantCode";

export const BUTTON_VARIANT_PAIR: CodeText<ButtonVariantCode> =
  new (class extends CodeText<ButtonVariantCode> {
    protected setup(): void {
      this.append(BUTTON_VARIANT_CODE.TEXT, BUTTON_VARIANT.TEXT);
      this.append(BUTTON_VARIANT_CODE.TONAL, BUTTON_VARIANT.TONAL);
      this.append(BUTTON_VARIANT_CODE.FLAT, BUTTON_VARIANT.FLAT);
      this.append(BUTTON_VARIANT_CODE.ELEVATED, BUTTON_VARIANT.ELEVATED);
      this.append(BUTTON_VARIANT_CODE.OUTLINED, BUTTON_VARIANT.OUTLINED);
      this.append(BUTTON_VARIANT_CODE.PLAIN, BUTTON_VARIANT.PLAIN);
    }
  })();
