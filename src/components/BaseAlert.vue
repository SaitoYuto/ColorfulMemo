<template>
  <v-alert closable :color="color" :text="text" :variant="variant"></v-alert>
</template>

<script lang="ts" setup>
import { ALERT_VARIANT } from "@/constants/AlertVariant";
import type { AlertVariant } from "@/types/AlertVariant";
defineProps({
  closable: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<AlertVariant>,
    default: ALERT_VARIANT.OUTLINED,
  },
});
</script>
