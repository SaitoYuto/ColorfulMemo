<template>
  <v-app>
    <v-main> <router-view /> </v-main
  ></v-app>
</template>

<script lang="ts" setup>
import { setting } from "@/stores/setting";
import { useTheme } from "vuetify";

useTheme().global.name.value = setting().isLightMode() ? "light" : "dark";
</script>
