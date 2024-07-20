<template>
  <v-select
    :bg-color="bgColor"
    :items="items"
    :item-title="itemTitle"
    :item-value="itemTitle"
    :label="label"
    :return-object="returnObject"
    v-model="select"
  ></v-select>
</template>

<script lang="ts" setup>
defineProps({
  bgColor: {
    type: String,
    required: false,
    default: undefined,
  },
  items: {
    type: Array,
    required: true,
  },
  itemTitle: {
    type: String,
    required: false,
    default: "text",
  },
  itemValue: {
    type: String,
    required: false,
    default: "code",
  },
  label: {
    type: String,
    required: true,
  },
  returnObject: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const select = defineModel("select", {
  type: Object,
});
</script>
