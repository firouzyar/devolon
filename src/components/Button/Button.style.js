import styled from "styled-components";
export const HtmlButton = styled.button`
  color: #fff;
  font-size: 1.3em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  outline: none;
  background: ${(props) =>
    // if primary
    props.primary
      ? "green"
      : // else if success
      props.success
      ? "#0b900b"
      : // else if success
      props.info
      ? "#298fc5"
      : // else if warning
      props.warning
      ? "#dc9513"
      : // else if danger
      props.danger
      ? "#e00f0f"
      : // else default
        "#58c0d8"};
`;
