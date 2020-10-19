import React from "react";
import { mount } from "enzyme";
import Burger from "./Burger";

describe("Button component", () => {
  let wrapper;
  const toggleMenu = jest.fn();
  
  beforeEach(() => {
    wrapper = mount(<Burger onClick={toggleMenu}/>)
  });
  it("should render a widthout error", () => {
    expect(wrapper.find("button")).toBeTruthy();
  });

});
