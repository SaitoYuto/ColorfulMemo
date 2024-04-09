<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item>
        <v-icon icon="mdi-menu" :color="colorAttr.COLOR"></v-icon>
      </v-list-item>
      <v-list-item to="/">
        <template v-slot:prepend>
          <v-icon :color="colorAttr.COLOR">mdi-home</v-icon>
        </template>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/add">
        <template v-slot:prepend>
          <v-icon :color="colorAttr.COLOR">mdi-pencil</v-icon>
        </template>
        <v-list-item-title>Add</v-list-item-title></v-list-item
      >
      <v-list-item to="/setting">
        <template v-slot:prepend>
          <v-icon :color="colorAttr.COLOR">mdi-wrench</v-icon>
        </template>
        <v-list-item-title>Setting</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { setting } from "@/stores/setting";

const colorAttr = setting().getThemeColorConst;
</script>
