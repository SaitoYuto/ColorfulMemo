<template>
  <v-main>
    <v-label :text="INTERFACE_LABEL.PAGES.HOME" />
    <v-divider :color="colorConst.DIVIDER" :thickness="3" />
    <v-container>
      <v-list v-for="memo in memoStore.getMemos" :key="memo.id" lines="two">
        <v-label>{{ getDateLabel(memo.dateTime) }}</v-label>
        <v-list-item :to="`/edit/${memo.id}`" :base-color="colorConst.LIST">
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
        :color="colorConst.ALERT"
      ></base-alert>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { memo } from "@/stores/memo";
import { setting } from "@/stores/setting";
import moment from "moment";

const memoStore = memo();
const colorConst = setting().getThemeColorConst;

function getDateLabel(dateTime: string): string {
  const memoMoment = moment(dateTime);
  const todayMoment = moment();
  if (memoMoment.format("YYYY/MM/DD") == todayMoment.format("YYYY/MM/DD")) {
    return "Today";
  } else if (todayMoment.subtract(1, "w").isBefore(memoMoment)) {
    return "Last Week";
  } else if (todayMoment.subtract(30, "d").isBefore(memoMoment)) {
    return "Last 30 days";
  } else {
    return "More than 30 days";
  }
}
</script>
