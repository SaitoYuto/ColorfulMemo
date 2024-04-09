import { TEXTAREA_VARIANT } from "@/constants/TextAreaVariant";

export type TextAreaVariant =
  (typeof TEXTAREA_VARIANT)[keyof typeof TEXTAREA_VARIANT];
