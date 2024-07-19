<template>
  <v-app>
    <v-main> <router-view /> </v-main
  ></v-app>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/setting";
import { useTheme } from "vuetify";

const settingStore = useSettingStore();
useTheme().global.name.value = settingStore.getThemeMode(
  settingStore.getThemeModeCode
);
</script>
