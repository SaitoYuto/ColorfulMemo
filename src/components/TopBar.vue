<template>
  <v-app-bar :color="colorAttr.BAR">
    <v-app-bar-title :text="INTERFACE_LABEL.COMMON.TITLE" />
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/setting";
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";

const colorAttr = useSettingStore().getThemeColorConst(
  useSettingStore().getThemeColorCode
);
</script>
