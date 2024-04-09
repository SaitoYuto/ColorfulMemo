<template>
  <v-container>
    <RequiredTextField
      :bgColor="$props.colorAttr.BG_COLOR"
      :label="INTERFACE_LABEL.INPUT.MEMO_TITLE"
      v-model:input="titleInput"
    />
    <RequiredTextArea
      :bgColor="$props.colorAttr.BG_COLOR"
      :label="INTERFACE_LABEL.INPUT.MEMO_CONTENT"
      v-model:input="contentInput"
    />
  </v-container>
  <BaseDialog
    :text="MESSAGE.DIALOG.REQUIRED"
    v-model:isVisibleDialog="isVisibleDialog"
  ></BaseDialog>
  <v-container class="d-flex justify-space-evenly mx-16">
    <BaseButton
      :color="$props.colorAttr.COLOR"
      :text="INTERFACE_LABEL.BUTTON.SAVE"
      :isShow="!isEdit()"
      @click="save"
    />
    <BaseButton
      :color="$props.colorAttr.COLOR"
      :text="INTERFACE_LABEL.BUTTON.UPDATE"
      :isShow="isEdit()"
      @click="update"
    />
    <BaseButton
      :color="$props.colorAttr.COLOR"
      :text="INTERFACE_LABEL.BUTTON.DELETE"
      :isShow="isEdit()"
      @click="remove"
    />
    <BaseButton
      :color="$props.colorAttr.COLOR"
      :text="INTERFACE_LABEL.BUTTON.CANCEL"
      @click="forwardHome"
    />
  </v-container>
</template>

<script lang="ts" setup>
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { MESSAGE } from "@/constants/Message";
import { memo } from "@/stores/memo";
import type { Memo } from "@/types/Memo";

const props = defineProps({
  id: {
    type: String,
    required: false,
    default: "",
  },
  colorAttr: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const memoStore = memo();
const foundMemo = memoStore.findById(props.id.valueOf());
let isVisibleDialog = ref(false);

const titleInput = ref(foundMemo && foundMemo.title ? foundMemo.title : "");
const contentInput = ref(
  foundMemo && foundMemo.content ? foundMemo.content : ""
);

/**
 * determine if this component is used for edit page
 *
 * @returns {boolean}
 */
function isEdit(): boolean {
  return props.id.length > 0;
}

/**
 * stringify current date
 *
 * @returns {string}
 */
function stringifyCurrentDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return year + month + day + Date.now() + "";
}

/**
 * toggle dialog
 *
 * @returns {void}
 */
function toggleDialog(): void {
  isVisibleDialog.value = !isVisibleDialog.value;
}

/**
 * create Memo type data
 *
 * @returns {Memo}
 */
function formMemo(): Memo {
  return {
    id: stringifyCurrentDate(),
    title: titleInput.value,
    content: contentInput.value,
    dateTime:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  };
}

/**
 * check if both title and content are input
 *
 * @returns {boolean}
 */
function validate(): boolean {
  return !titleInput.value.length || !contentInput.value.length;
}

/**
 * save to store
 *
 * @returns {void}
 */
function save(): void {
  if (validate()) {
    // open dialog
    toggleDialog();
    return;
  }
  memoStore.add(formMemo());
  forwardHome();
}

/**
 * update to store data
 *
 * @returns {void}
 */
function update(): void {
  if (validate()) {
    toggleDialog();
    return;
  }
  memoStore.updateById(props.id, titleInput.value, contentInput.value);
  forwardHome();
}

/**
 * remove from store data
 *
 * @returns {void}
 */
function remove(): void {
  memoStore.removeById(props.id);
  forwardHome();
}

/**
 * forward home page
 *
 * @returns {void}
 */
function forwardHome(): void {
  router.push("/");
}
</script>
