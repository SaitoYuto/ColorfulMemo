import BaseSelect from "@/components/BaseSelect.vue";
import { mount } from "@vue/test-utils";
import "@/__tests__/setup";

describe("BaseSelect.vue", () => {
  it("renders props.label when passed", async () => {
    const label = "Select Label";
    const items = [1, 2, 3, 4];
    const wrapper = mount(BaseSelect, {
      props: {
        label: label,
        items: items,
      },
    });
    expect(wrapper.props("label")).toBe(label);
    expect(wrapper.props("items")).toStrictEqual(items);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders props.text when an empty string passed", async () => {
    const emptyLabel = "";
    const items = [1, 2, 3, 4];
    const wrapper = mount(BaseSelect, {
      props: {
        label: emptyLabel,
        items: items,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props("label")).toBe(emptyLabel);
    expect(wrapper.props("items")).toStrictEqual(items);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
