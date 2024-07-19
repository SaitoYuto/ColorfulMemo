<template>
  <v-main>
    <v-container>
      <v-label :text="INTERFACE_LABEL.PAGES.SETTING" />
      <v-divider :color="colorAttr.DIVIDER" :thickness="3" />
      <v-container>
        <BaseSelect
          :label="INTERFACE_LABEL.SELECT.MODE"
          :bgColor="colorAttr.SELECT"
          :items="THEME_MODE_PAIR.getList()"
          v-model:select="selectedModePair"
        ></BaseSelect>
        <BaseSelect
          :label="INTERFACE_LABEL.SELECT.COLOR"
          :bgColor="colorAttr.SELECT"
          :items="THEME_COLOR_PAIR.getList()"
          v-model:select="selectedColorPair"
        ></BaseSelect>
        <BaseSelect
          :label="INTERFACE_LABEL.SELECT.BUTTON"
          :bgColor="colorAttr.SELECT"
          :items="BUTTON_VARIANT_PAIR.getList()"
          v-model:select="selectedVariantPair"
        ></BaseSelect>
      </v-container>
      <v-container class="d-flex justify-space-evenly mx-16">
        <BaseButton
          :text="INTERFACE_LABEL.BUTTON.SAVE"
          :color="colorAttr.BUTTON"
          :variant="variant"
          @click="save"
        />
      </v-container>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { BUTTON_VARIANT_PAIR } from "@/constants/ButtonVariantPair";
import { THEME_MODE_PAIR } from "@/constants/ThemeModePair";
import { THEME_COLOR_PAIR } from "@/constants/ThemeColorPair";
import { useSettingStore } from "@/stores/setting";
import { ButtonVariant } from "@/types/ButtonVariant";
import { useTheme } from "vuetify";

const settingStore = useSettingStore();
const router = useRouter();
const theme = useTheme();
const selectedModePair = ref(
  THEME_MODE_PAIR.get(settingStore.getThemeModeCode)
);
const selectedColorPair = ref(
  THEME_COLOR_PAIR.get(settingStore.getThemeColorCode)
);
const selectedVariantPair = ref(
  BUTTON_VARIANT_PAIR.get(settingStore.getButtonVariantCode)
);
const colorAttr = ref(
  settingStore.getThemeColorConst(settingStore.getThemeColorCode)
);
const variant = ref(
  settingStore.getButtonVariantConst(settingStore.getButtonVariantCode)
);

/**
 * save selected value to store
 */
function save(): void {
  settingStore.$patch({
    themeModeCode: selectedModePair.value.code,
    themeColorCode: selectedColorPair.value.code,
    buttonVariantCode: selectedVariantPair.value.code,
  });
  router.go(0);
}

/**
 * monitor theme mode choice and modify the mode
 */
watch(selectedModePair, (newVal) => {
  theme.global.name.value = newVal.text.toLowerCase();
});

/**
 * monitor theme mode choice and modify the color
 */
watch(selectedColorPair, (newVal) => {
  colorAttr.value = settingStore.getThemeColorConst(newVal.code);
});

/**
 * monitor button variant choice and modify the button style
 */
watch(selectedVariantPair, (newVal) => {
  variant.value = newVal?.text as ButtonVariant;
});
</script>
