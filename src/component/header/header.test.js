import React from "react";
import { shallow } from "enzyme";
import { getByTestAttr } from "./../../../Utils";
import Header from "./index";

const setup = (props = {}) => {
  const wrapper = shallow(<Header {...props} />);
  return wrapper;
};

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it("Should render without errors", () => {
    const component = getByTestAttr(wrapper, "headerComponent");
    expect(component.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = getByTestAttr(wrapper, "logoImg");
    expect(logo.length).toBe(1);
  });
});
