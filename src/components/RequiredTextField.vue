<template>
  <v-text-field
    :bg-color="bgColor"
    :class="$props.class"
    :clearable="clearable"
    :label="label"
    :rows="rows"
    :rules="[isRequired]"
    :variant="variant"
    v-model="input"
  ></v-text-field>
</template>

<script lang="ts" setup>
import { MESSAGE } from "@/constants/Message";
import { TEXTFIELD_VARIANT } from "@/constants/TextFieldVariant";
import type { TextFieldVariant } from "@/types/TextFieldVariant";

defineProps({
  bgColor: String,
  clearable: {
    type: Boolean,
    default: true,
  },
  label: String,
  variant: {
    type: String as PropType<TextFieldVariant>,
    default: TEXTFIELD_VARIANT.OUTLINED,
  },
  rows: {
    type: String,
    default: "1",
  },
  class: {
    type: String,
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
