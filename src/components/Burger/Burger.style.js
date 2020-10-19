import styled from "styled-components";

export const StyledBurger = styled.button`
  position: fixed;
  top: 2em;
  left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5em;
  height: 34px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 3em;
    height: 7px;
    background: ${({ open }) => (open ? "#38889a" : "#57c0d8")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? "translate(4px,-5px) rotate(45deg);" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "translate(3px) rotate(-45deg)" : "rotate(0)"};
    }
  }
`;
