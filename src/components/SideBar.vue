<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item>
        <v-icon :color="colorAttr.ICON" :icon="ICON.MENU"></v-icon>
      </v-list-item>
      <v-list-item to="/">
        <template v-slot:prepend>
          <v-icon :color="colorAttr.ICON" :icon="ICON.HOME"></v-icon>
        </template>
        <v-list-item-title>{{ INTERFACE_LABEL.PAGES.HOME }}</v-list-item-title>
      </v-list-item>
      <v-list-item to="/add">
        <template v-slot:prepend>
          <v-icon :color="colorAttr.ICON" :icon="ICON.PENCIL"></v-icon>
        </template>
        <v-list-item-title>{{
          INTERFACE_LABEL.PAGES.ADD
        }}</v-list-item-title></v-list-item
      >
      <v-list-item to="/setting">
        <template v-slot:prepend>
          <v-icon :color="colorAttr.ICON" :icon="ICON.WRENCH"></v-icon>
        </template>
        <v-list-item-title
          >{{ INTERFACE_LABEL.PAGES.SETTING }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <a href="https://github.com/SaitoYuto/colorfulmemo">
        <v-icon
          :color="colorAttr.ICON"
          :icon="ICON.GITHUB"
          size="x-large"
        ></v-icon>
      </a>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ICON } from "@/constants/Icon";
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { useSettingStore } from "@/stores/setting";

const colorAttr = useSettingStore().getThemeColorConst(
  useSettingStore().getThemeColorCode
);
</script>
