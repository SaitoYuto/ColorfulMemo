<template>
  <v-main>
    <v-label :text="INTERFACE_LABEL.PAGES.HOME" />
    <v-divider :color="colorConst.COLOR_TYPE" :thickness="3" />
    <v-container>
      <v-list v-for="memo in memoStore.getMemos" :key="memo.id" lines="two">
        <v-list-item
          :to="`/edit/${memo.id}`"
          :base-color="colorConst.COLOR_TYPE"
          :title="memo.dateTime"
        >
          <v-list-item-title>
            {{ memo.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ memo.content }}
          </v-list-item-subtitle></v-list-item
        >
      </v-list>
      <base-alert
        v-show="!memoStore.length"
        :text="INTERFACE_LABEL.ALERT.NO_MEMO"
        :color="colorConst.COLOR_TYPE"
      ></base-alert>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { memo } from "@/stores/memo";
import { setting } from "@/stores/setting";

const memoStore = memo();
const colorConst = setting().getThemeColorConst;
</script>
