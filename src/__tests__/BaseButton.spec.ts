import BaseButton from "@/components/BaseButton.vue";
import { mount } from "@vue/test-utils";
import "@/__tests__/setup";

describe("BaseButton.vue", () => {
  it("renders props.text when passed", async () => {
    const text = "Button Text";
    const wrapper = mount(BaseButton, {
      props: {
        text: text,
      },
    });
    expect(wrapper.props("text")).toBe(text);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders props.text when an empty string passed", async () => {
    const emptyText = "";
    const wrapper = mount(BaseButton, {
      props: {
        text: emptyText,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props("text")).toBe(emptyText);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders props.isShow when true passed", async () => {
    const text = "Button Text";
    const isShow = true;
    const wrapper = mount(BaseButton, {
      props: {
        text: text,
        isShow: isShow,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("becomes invisible props.isShow when false passed", async () => {
    const text = "Button Text";
    const isNotShow = false;
    const wrapper = mount(BaseButton, {
      props: {
        text: text,
        isShow: isNotShow,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.isVisible()).toBe(false);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
