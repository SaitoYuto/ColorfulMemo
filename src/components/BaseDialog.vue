<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isVisible" width="auto">
      <v-card :title="props.title" max-width="400" :text="props.text">
        <template v-slot:actions>
          <v-btn class="ms-auto" :text="props.closeText" @click="close"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: INTERFACE_LABEL.DIALOG.TITLE,
  },
  text: {
    type: String,
    required: true,
  },
  closeText: {
    type: String,
    required: false,
    default: INTERFACE_LABEL.DIALOG.CLOSE,
  },
});

const isVisible = defineModel("isVisibleDialog", {
  type: Boolean,
  default: false,
});

/**
 * close dialog
 *
 * @returns {boolean}
 */
function close(): void {
  isVisible.value = false;
}
</script>
