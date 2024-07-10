import RequiredTextArea from "@/components/RequiredTextArea.vue";
import { mount } from "@vue/test-utils";
import "@/__tests__/setup";
import { TEXTAREA_VARIANT } from "@/constants/TextAreaVariant";

describe("RequiredTextArea.vue", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(RequiredTextArea);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders with provided props", () => {
    const wrapper = mount(RequiredTextArea, {
      props: {
        bgColor: "red",
        clearable: false,
        label: "Test Label",
        variant: "filled",
        class: "custom-class",
      },
    });

    expect(wrapper.props("bgColor")).toBe("red");
    expect(wrapper.props("clearable")).toBe(false);
    expect(wrapper.props("label")).toBe("Test Label");
    expect(wrapper.props("variant")).toBe(TEXTAREA_VARIANT.FILLED);
    expect(wrapper.props("class")).toBe("custom-class");
  });
});
