import MemoForm from "@/components/MemoForm.vue";
import RequiredTextField from "@/components/RequiredTextField.vue";
import RequiredTextArea from "@/components/RequiredTextArea.vue";
import { BUTTON_VARIANT } from "@/constants/ButtonVariant";
import { COLOR_ATTR } from "@/constants/ColorAttr";
import { useMemoStore } from "@/stores/memo";
import { flushPromises, mount } from "@vue/test-utils";
import "@/__tests__/setup";
import { mockRouter } from "@/__tests__/setup";
import moment from "moment";
import { MockInstance } from "vitest";
import { INTERFACE_LABEL } from "@/constants/InterfaceLabel";

describe("MemoForm.vue", () => {
  let memoStore: ReturnType<typeof useMemoStore>;
  let routerPushSpy: MockInstance;

  beforeEach(() => {
    memoStore = useMemoStore();
    vi.mock("vue-router", () => ({
      useRouter: () => mockRouter,
    }));
    routerPushSpy = vi.spyOn(mockRouter, "push");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders form for adding memo when not passing props.id", async () => {
    const emptyId = "";
    const wrapper = mount(MemoForm, {
      props: {
        id: emptyId,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });

    const saveButton = await wrapper.findComponent("[data-testid=save-button]");
    const updateButton = await wrapper.findComponent(
      "[data-testid=update-button]"
    );
    const deleteButton = await wrapper.findComponent(
      "[data-testid=delete-button]"
    );
    const cancelButton = await wrapper.findComponent(
      "[data-testid=cancel-button]"
    );
    expect(saveButton.isVisible()).toBe(true);
    expect(saveButton.text()).toBe(INTERFACE_LABEL.BUTTON.SAVE);
    expect(updateButton.isVisible()).toBe(false);
    expect(updateButton.text()).toBe(INTERFACE_LABEL.BUTTON.UPDATE);
    expect(deleteButton.isVisible()).toBe(false);
    expect(deleteButton.text()).toBe(INTERFACE_LABEL.BUTTON.DELETE);
    expect(cancelButton.isVisible()).toBe(true);
    expect(cancelButton.text()).toBe(INTERFACE_LABEL.BUTTON.CANCEL);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders form for editing existing memo when passing props.id", async () => {
    const id = "123";
    const wrapper = mount(MemoForm, {
      props: {
        id: id,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });
    const saveButton = await wrapper.findComponent("[data-testid=save-button]");
    const updateButton = await wrapper.findComponent(
      "[data-testid=update-button]"
    );
    const deleteButton = await wrapper.findComponent(
      "[data-testid=delete-button]"
    );
    const cancelButton = await wrapper.findComponent(
      "[data-testid=cancel-button]"
    );
    expect(saveButton.isVisible()).toBe(false);
    expect(saveButton.text()).toBe(INTERFACE_LABEL.BUTTON.SAVE);
    expect(updateButton.isVisible()).toBe(true);
    expect(updateButton.text()).toBe(INTERFACE_LABEL.BUTTON.UPDATE);
    expect(deleteButton.isVisible()).toBe(true);
    expect(deleteButton.text()).toBe(INTERFACE_LABEL.BUTTON.DELETE);
    expect(cancelButton.isVisible()).toBe(true);
    expect(cancelButton.text()).toBe(INTERFACE_LABEL.BUTTON.CANCEL);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("saves new memo correctly", async () => {
    const addSpy = vi.spyOn(memoStore, "add");
    const emptyId = "";
    const wrapper = mount(MemoForm, {
      props: {
        id: emptyId,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });
    const titleValue = "New Memo Title";
    const contentValue = "New Memo Content";
    await wrapper
      .findComponent<typeof RequiredTextField>("[data-testid=title-text-field]")
      .vm.$emit("update:input", titleValue);
    await wrapper
      .findComponent<typeof RequiredTextArea>("[data-testid=content-text-area]")
      .vm.$emit("update:input", contentValue);
    await wrapper.findComponent("[data-testid=save-button]").trigger("click");
    await flushPromises();
    expect(addSpy).toHaveBeenCalledTimes(1);
    expect(addSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        title: titleValue,
        content: contentValue,
      })
    );
    expect(routerPushSpy).toHaveBeenCalledWith("/");
  });

  it("fails to save new memo for validate violation ", async () => {
    const addSpy = vi.spyOn(memoStore, "add");
    const emptyId = "";
    const wrapper = mount(MemoForm, {
      props: {
        id: emptyId,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });
    const titleValue = "";
    const contentValue = "";
    await wrapper
      .findComponent<typeof RequiredTextField>("[data-testid=title-text-field]")
      .vm.$emit("update:input", titleValue);
    await wrapper
      .findComponent<typeof RequiredTextArea>("[data-testid=content-text-area]")
      .vm.$emit("update:input", contentValue);
    await wrapper.findComponent("[data-testid=save-button]").trigger("click");
    await flushPromises();
    expect(addSpy).toHaveBeenCalledTimes(0);
    expect(addSpy).not.toHaveBeenCalled();
    expect(routerPushSpy).not.toHaveBeenCalledWith("/");
  });

  it("updates existing memo correctly", async () => {
    const updateSpy = vi.spyOn(memoStore, "updateById");
    const id = "123";
    const wrapper = mount(MemoForm, {
      props: {
        id: id,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });

    memoStore.add({
      id: id,
      title: "Old Memo Title",
      content: "Old Memo Content",
      dateTime: moment().format("YYYY/MM/DD HH:mm"),
    });
    const titleValue = "New Memo Title";
    const contentValue = "New Memo Content";
    await wrapper
      .findComponent<typeof RequiredTextField>("[data-testid=title-text-field]")
      .vm.$emit("update:input", titleValue);
    await wrapper
      .findComponent<typeof RequiredTextArea>("[data-testid=content-text-area]")
      .vm.$emit("update:input", contentValue);
    await wrapper.findComponent("[data-testid=update-button]").trigger("click");
    await flushPromises();
    expect(updateSpy).toHaveBeenCalledTimes(1);
    expect(updateSpy).toHaveBeenCalledWith(id, titleValue, contentValue);
    expect(routerPushSpy).toHaveBeenCalledWith("/");
  });

  it("fails to update existing memo for validate violation", async () => {
    const updateSpy = vi.spyOn(memoStore, "updateById");
    const id = "123";
    const wrapper = mount(MemoForm, {
      props: {
        id: id,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });

    memoStore.add({
      id: id,
      title: "Old Memo Title",
      content: "Old Memo Content",
      dateTime: moment().format("YYYY/MM/DD HH:mm"),
    });
    const titleValue = "";
    const contentValue = "";
    await wrapper
      .findComponent<typeof RequiredTextField>("[data-testid=title-text-field]")
      .vm.$emit("update:input", titleValue);
    await wrapper
      .findComponent<typeof RequiredTextArea>("[data-testid=content-text-area]")
      .vm.$emit("update:input", contentValue);
    await wrapper.findComponent("[data-testid=update-button]").trigger("click");
    await flushPromises();
    expect(updateSpy).toHaveBeenCalledTimes(0);
    expect(updateSpy).not.toHaveBeenCalledWith(id, titleValue, contentValue);
    expect(routerPushSpy).not.toHaveBeenCalledWith("/");
  });

  it("removes existing memo correctly", async () => {
    const removeSpy = vi.spyOn(memoStore, "removeById");
    const id = "123";
    const wrapper = mount(MemoForm, {
      props: {
        id: id,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });

    memoStore.add({
      id: id,
      title: "Memo Title",
      content: "Memo Content",
      dateTime: moment().format("YYYY/MM/DD HH:mm"),
    });

    await wrapper.findComponent("[data-testid=delete-button]").trigger("click");
    await flushPromises();
    expect(removeSpy).toHaveBeenCalledTimes(1);
    expect(removeSpy).toHaveBeenCalledWith(id);
    expect(routerPushSpy).toHaveBeenCalledWith("/");
  });

  it("clicks cancel button on form for adding memo", async () => {
    const emptyId = "";
    const wrapper = mount(MemoForm, {
      props: {
        id: emptyId,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });

    await wrapper.findComponent("[data-testid=cancel-button]").trigger("click");
    expect(routerPushSpy).toHaveBeenCalledWith("/");
  });

  it("clicks cancel button on form for editing memo", async () => {
    const id = "123";
    const wrapper = mount(MemoForm, {
      props: {
        id: id,
        colorAttr: COLOR_ATTR.DEFAULT,
        buttonVariant: BUTTON_VARIANT.TONAL,
      },
    });

    await wrapper.findComponent("[data-testid=cancel-button]").trigger("click");
    expect(routerPushSpy).toHaveBeenCalledWith("/");
  });
});
