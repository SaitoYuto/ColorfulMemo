<template>
  <v-btn :text="text" :color="color" :variant="variant" v-show="isShow"></v-btn>
</template>

<script lang="ts" setup>
import { BUTTON_VARIANT } from "@/constants/ButtonVariant";
import type { ButtonVariant } from "@/types/ButtonVariant";
defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: undefined,
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    required: false,
    default: BUTTON_VARIANT.TONAL,
  },
  isShow: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>
