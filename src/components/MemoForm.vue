<template>
  <v-form ref="memoForm">
    <v-container>
      <RequiredTextField
        data-testid="title-text-field"
        :bgColor="colorAttr.TEXT_FIELD"
        :label="INTERFACE_LABEL.INPUT.MEMO_TITLE"
        v-model:input="titleInput"
      />
      <RequiredTextArea
        data-testid="content-text-area"
        :bgColor="colorAttr.TEXT_AREA"
        :label="INTERFACE_LABEL.INPUT.MEMO_CONTENT"
        v-model:input="contentInput"
      />
    </v-container>
    <v-container class="d-flex justify-space-evenly mx-16">
      <BaseButton
        data-testid="save-button"
        :color="colorAttr.BUTTON"
        :text="INTERFACE_LABEL.BUTTON.SAVE"
        :variant="buttonVariant"
        :isShow="!isEdit()"
        @click="save"
      />
      <BaseButton
        data-testid="update-button"
        :color="colorAttr.BUTTON"
        :text="INTERFACE_LABEL.BUTTON.UPDATE"
        :variant="buttonVariant"
        :isShow="isEdit()"
        @click="update"
      />
      <BaseButton
        data-testid="delete-button"
        :color="colorAttr.BUTTON"
        :text="INTERFACE_LABEL.BUTTON.DELETE"
        :variant="buttonVariant"
        :isShow="isEdit()"
        @click="remove"
      />
      <BaseButton
        data-testid="cancel-button"
        :color="colorAttr.BUTTON"
        :text="INTERFACE_LABEL.BUTTON.CANCEL"
        :variant="buttonVariant"
        @click="forwardHome"
      />
    </v-container>
  </v-form>
</template>

<script lang="ts" setup>
import moment from "moment";
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";
import { memo } from "@/stores/memo";
import type { Memo } from "@/types/Memo";
import { ButtonVariant } from "@/types/ButtonVariant";

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
  buttonVariant: {
    type: String as PropType<ButtonVariant>,
    required: true,
  },
});

const router = useRouter();
const memoForm = ref();
const memoStore = memo();
const foundMemo = memoStore.findById(props.id.valueOf());

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
 * create Memo type data
 *
 * @returns {Memo}
 */
function formMemo(): Memo {
  return {
    id: stringifyCurrentDate(),
    title: titleInput.value,
    content: contentInput.value,
    dateTime: moment().format("YYYY/MM/DD HH:mm"),
  };
}

/**
 * save to store
 *
 * @returns {Promise<void>}
 */
async function save(): Promise<void> {
  const validResult = await memoForm.value.validate();
  if (!validResult.valid) {
    return;
  }
  memoStore.add(formMemo());
  forwardHome();
}

/**
 * update to store data
 *
 * @returns {Promise<void>}
 */
async function update(): Promise<void> {
  const validResult = await memoForm.value.validate();
  if (!validResult.valid) {
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
