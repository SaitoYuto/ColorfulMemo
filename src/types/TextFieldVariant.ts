import { TEXTFIELD_VARIANT } from "@/constants/TextFieldVariant";

export type TextFieldVariant =
  (typeof TEXTFIELD_VARIANT)[keyof typeof TEXTFIELD_VARIANT];
