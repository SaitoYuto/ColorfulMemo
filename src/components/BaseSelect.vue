<template>
  <v-select
    :label="props.label"
    :items="props.items"
    :item-title="props.itemTitle"
    :item-value="props.itemTitle"
    :bg-color="props.bgColor"
    :return-object="props.returnObject"
    v-model="select"
  ></v-select>
</template>

<script lang="ts" setup>
const props = defineProps({
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
