import React from "react";
import { HtmlButton } from "./Button.style";
function Button(props) {
  const { handleClick } = props;
  return (
    <HtmlButton onClick={handleClick} {...props}>
      {props.children}
    </HtmlButton>
  );
}

export default Button;
