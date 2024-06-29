<template>
  <v-main>
    <v-label :text="INTERFACE_LABEL.PAGES.ADD" />
    <v-divider :color="colorAttr.DIVIDER" :thickness="3" />
    <MemoForm :colorAttr="colorAttr" :buttonVariant="variant" />
  </v-main>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { setting } from "@/stores/setting";

const settingStore = setting();
const colorAttr = settingStore.getThemeColorConst;
const variant = settingStore.getButtonVariantConst;
</script>
