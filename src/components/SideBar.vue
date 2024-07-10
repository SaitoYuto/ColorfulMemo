<template>
  <v-app>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item>
          <v-icon icon="mdi-menu" :color="colorAttr.ICON"></v-icon>
        </v-list-item>
        <v-list-item to="/">
          <template v-slot:prepend>
            <v-icon :color="colorAttr.ICON">mdi-home</v-icon>
          </template>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/add">
          <template v-slot:prepend>
            <v-icon :color="colorAttr.ICON">mdi-pencil</v-icon>
          </template>
          <v-list-item-title>Add</v-list-item-title></v-list-item
        >
        <v-list-item to="/setting">
          <template v-slot:prepend>
            <v-icon :color="colorAttr.ICON">mdi-wrench</v-icon>
          </template>
          <v-list-item-title>Setting</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <a href="https://github.com/SaitoYuto/colorfulmemo">
          <v-icon :color="colorAttr.ICON" size="x-large">mdi-github</v-icon>
        </a>
      </template>
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts" setup>
import { setting } from "@/stores/setting";

const colorAttr = setting().getThemeColorConst;
</script>
