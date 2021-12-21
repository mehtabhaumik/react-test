import React from "react";
import { shallow } from "enzyme";
import { getByTestAttr } from "./../../../Utils";
import Header from "./index";

const setup = (props = {}) => {
  const wrapper = shallow(<Header {...props} />);
  return wrapper;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => (component = setup()));

  it("Should render without errors", () => {
    const wrapper = getByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = getByTestAttr(component, "logoImg");
    expect(logo.length).toBe(1);
  });
});
