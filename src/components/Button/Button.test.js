import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import {findTestByHtml} from "../../ustils/testUtils"

describe("Button component", () => {
  let wrapper;
  const handleClick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Button onClick={handleClick}/>)
  });
  it("should render a button", () => {
    
    expect(findTestByHtml(wrapper,'button').length).toBe(1);
  });
  it("should call handleClick on button click", () => {
    findTestByHtml(wrapper,'button').simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  });

});
