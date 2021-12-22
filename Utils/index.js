import checkPropTypes from "prop-types/checkPropTypes";

export const getByTestAttr = (wrapper, attr) => {
  const component = wrapper.find(`[data-test='${attr}']`);
  return component;
};

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
};
