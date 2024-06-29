<template>
  <v-main>
    <v-label :text="INTERFACE_LABEL.PAGES.EDIT" />
    <v-divider :color="colorAttr.DIVIDER" :thickness="3" />
    <MemoForm
      :id="id"
      :colorAttr="colorAttr"
      :buttonVariant="variant"
    ></MemoForm>
  </v-main>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { setting } from "@/stores/setting";

const id = useRoute("/edit/[id]").params.id;
const colorAttr = setting().getThemeColorConst;
const variant = setting().getButtonVariantConst;
</script>
