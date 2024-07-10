import RequiredTextField from "@/components/RequiredTextField.vue";
import { mount } from "@vue/test-utils";
import "@/__tests__/setup";
import { TEXTFIELD_VARIANT } from "@/constants/TextFieldVariant";

describe("RequiredTextField.vue", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(RequiredTextField);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders with provided props", () => {
    const wrapper = mount(RequiredTextField, {
      props: {
        bgColor: "red",
        clearable: false,
        label: "Test Label",
        variant: "filled",
        rows: "1",
        class: "custom-class",
      },
    });

    expect(wrapper.props("bgColor")).toBe("red");
    expect(wrapper.props("clearable")).toBe(false);
    expect(wrapper.props("label")).toBe("Test Label");
    expect(wrapper.props("variant")).toBe(TEXTFIELD_VARIANT.FILLED);
    expect(wrapper.props("class")).toBe("custom-class");
  });
});
