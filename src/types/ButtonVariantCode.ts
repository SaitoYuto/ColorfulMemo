import { BUTTON_VARIANT_CODE } from "@/constants/ButtonVariantCode";

export type ButtonVariantCode = Number &
  (typeof BUTTON_VARIANT_CODE)[keyof typeof BUTTON_VARIANT_CODE];
