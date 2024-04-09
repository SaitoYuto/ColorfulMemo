<template>
  <v-main>
    <v-label :text="INTERFACE_LABEL.PAGES.ADD" />
    <v-divider :color="colorAttr.COLOR_TYPE" :thickness="3" />
    <MemoForm :colorAttr="colorAttr" />
  </v-main>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { setting } from "@/stores/setting";

const colorAttr = setting().getThemeColorConst;
</script>
