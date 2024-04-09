<template>
  <v-btn
    :text="props.text"
    :color="props.color"
    :variant="props.variant"
    v-show="props.isShow"
  >
  </v-btn>
</template>

<script lang="ts" setup>
import { BUTTON_VARIANT } from "@/constants/ButtonVariant";
import type { ButtonVariant } from "@/types/ButtonVariant";
const props = defineProps({
  isShow: {
    type: Boolean,
    required: false,
    default: true,
  },
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
});
</script>
