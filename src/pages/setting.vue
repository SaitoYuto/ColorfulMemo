<template>
  <v-main>
    <v-container>
      <v-label :text="INTERFACE_LABEL.PAGES.SETTING" />
      <v-divider :color="colorAttr.COLOR_TYPE" :thickness="3" />
      <v-container>
        <BaseSelect
          :label="INTERFACE_LABEL.SELECT.MODE"
          :bgColor="colorAttr.BG_COLOR"
          :items="modes"
          v-model:select="selectedModePair"
        ></BaseSelect>
        <BaseSelect
          :label="INTERFACE_LABEL.SELECT.COLOR"
          :bgColor="colorAttr.BG_COLOR"
          :items="colors"
          v-model:select="selectedColorPair"
        ></BaseSelect>
      </v-container>
      <v-container class="d-flex justify-space-evenly mx-16">
        <BaseButton
          :text="INTERFACE_LABEL.BUTTON.SAVE"
          :color="colorAttr.COLOR"
          @click="save"
        />
      </v-container>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { THEME_MODE_PAIR } from "@/constants/ThemeModePair";
import { THEME_COLOR_PAIR } from "@/constants/ThemeColorPair";
import { setting } from "@/stores/setting";
const settingStore = setting();
const router = useRouter();
const modes = THEME_MODE_PAIR.getList();
const colors = THEME_COLOR_PAIR.getList();
const selectedModePair = ref(THEME_MODE_PAIR.get(settingStore.getThemeMode));
const selectedColorPair = ref(THEME_COLOR_PAIR.get(settingStore.getThemeColor));
const colorAttr = settingStore.getThemeColorConst;

/**
 * save selected value to store
 */
function save(): void {
  if (selectedModePair.value != undefined) {
    settingStore.setThemeMode(selectedModePair.value.code);
  }
  if (selectedColorPair.value != undefined) {
    settingStore.setThemeColor(selectedColorPair.value.code);
  }
  router.go(0);
}
</script>
