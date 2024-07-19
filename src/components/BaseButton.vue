<template>
  <v-btn
    :color="color"
    :text="text"
    :variant="variant"
    v-show="visibility"
  ></v-btn>
</template>

<script lang="ts" setup>
import { BUTTON_VARIANT } from "@/constants/ButtonVariant";
import type { ButtonVariant } from "@/types/ButtonVariant";
defineProps({
  color: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    default: BUTTON_VARIANT.TONAL,
  },
  visibility: {
    type: Boolean,
    default: true,
  },
});
</script>
