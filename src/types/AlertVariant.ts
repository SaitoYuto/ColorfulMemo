import { ALERT_VARIANT } from "@/constants/AlertVariant";

export type AlertVariant = (typeof ALERT_VARIANT)[keyof typeof ALERT_VARIANT];
