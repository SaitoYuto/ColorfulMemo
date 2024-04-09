import { BUTTON_VARIANT } from "@/constants/ButtonVariant";

export type ButtonVariant =
  (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];
