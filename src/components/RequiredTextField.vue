<template>
  <v-text-field
    :bg-color="props.bgColor"
    :clearable="props.clearable"
    :label="props.label"
    :variant="props.variant"
    :rows="props.rows"
    :class="props.class"
    v-model="input"
    :rules="[isRequired]"
  ></v-text-field>
</template>

<script lang="ts" setup>
import { MESSAGE } from "@/constants/Message";
import { TEXTFIELD_VARIANT } from "@/constants/TextFieldVariant";
import type { TextFieldVariant } from "@/types/TextFieldVariant";

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
    type: String as PropType<TextFieldVariant>,
    required: false,
    default: TEXTFIELD_VARIANT.OUTLINED,
  },
  rows: {
    type: String,
    required: false,
    default: "1",
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
function isRequired(): boolean | string {
  return input.value.length > 0 || MESSAGE.FIELD.REQUIRED;
}
</script>
