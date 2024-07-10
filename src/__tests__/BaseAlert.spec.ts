import BaseAlert from "@/components/BaseAlert.vue";
import { mount } from "@vue/test-utils";
import "@/__tests__/setup";

describe("BaseAlert.vue", () => {
  it("renders props.text when passed", async () => {
    const text = "Alert Text";
    const wrapper = mount(BaseAlert, {
      props: {
        text: text,
      },
    });
    expect(wrapper.props("text")).toBe(text);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders props.text when an empty string passed", async () => {
    const emptyText = "";
    const wrapper = mount(BaseAlert, {
      props: {
        text: emptyText,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props("text")).toBe(emptyText);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
