import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { getByTestAttr } from "./../../../Utils";

const setup = (props = {}) => {
  const wrapper = shallow(<Headline {...props} />);
  return wrapper;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        description: "Test Desc",
      };
      wrapper = setup(props);
    });

    it("Should render without errors", () => {
      const component = getByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a H1", () => {
      const h1 = getByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a description", () => {
      const description = getByTestAttr(wrapper, "description");
      expect(description.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();
    });

    it("Should not render", () => {
      const component = getByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
