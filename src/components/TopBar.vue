<template>
  <v-app-bar :color="colorAttr.COLOR">
    <v-app-bar-title text="Colorful Memo" />
  </v-app-bar>
</template>

<script lang="ts" setup>
import { setting } from "@/stores/setting";

const colorAttr = setting().getThemeColorConst;
</script>
