<template>
  <v-textarea
    :bg-color="bgColor"
    :class="$props.class"
    :clearable="clearable"
    :label="label"
    :rules="[isRequired]"
    :variant="variant"
    v-model="input"
  ></v-textarea>
</template>

<script lang="ts" setup>
import { MESSAGE } from "@/constants/Message";
import { TEXTAREA_VARIANT } from "@/constants/TextAreaVariant";
import type { TextAreaVariant } from "@/types/TextAreaVariant";

defineProps({
  bgColor: String,
  class: {
    type: String,
    default: "mt-4",
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  label: String,
  variant: {
    type: String as PropType<TextAreaVariant>,
    default: TEXTAREA_VARIANT.OUTLINED,
  },
});

const input = defineModel("input", {
  type: String,
  default: "",
});

/**
 * check if the input exists
 *
 * @returns {boolean | string}
 */
function isRequired(): string | boolean {
  return input.value.length > 0 || MESSAGE.FIELD.REQUIRED;
}
</script>
