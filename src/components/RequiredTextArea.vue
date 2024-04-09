<template>
  <v-textarea
    :bg-color="props.bgColor"
    :clearable="props.clearable"
    :label="props.label"
    :variant="props.variant"
    :class="props.class"
    :rules="[isRequired]"
    v-model="input"
  ></v-textarea>
</template>

<script lang="ts" setup>
import { MESSAGE } from "@/constants/Message";
import { TEXTAREA_VARIANT } from "@/constants/TextAreaVariant";
import type { TextAreaVariant } from "@/types/TextAreaVariant";

const props = defineProps({
  bgColor: {
    type: String,
    required: false,
    default: undefined,
  },
  clearable: {
    type: Boolean,
    required: false,
    default: true,
  },
  label: {
    type: String,
    required: false,
  },
  variant: {
    type: String as PropType<TextAreaVariant>,
    required: false,
    default: TEXTAREA_VARIANT.OUTLINED,
  },
  class: {
    type: String,
    required: false,
    default: "mt-4",
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
