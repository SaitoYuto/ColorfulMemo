<template>
  <v-select
    :label="label"
    :items="items"
    :item-title="itemTitle"
    :item-value="itemTitle"
    :bg-color="bgColor"
    :return-object="returnObject"
    v-model="select"
  ></v-select>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
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
  bgColor: {
    type: String,
    required: false,
    default: undefined,
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
