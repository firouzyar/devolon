import styled, { keyframes } from "styled-components";
const FadeIn = keyframes`
  0%{
    opacity:0;
    transform:translate(0,10px)
  }
  100%{
    opacity:1;
    transform:translate(0)
  }
`;
export const HtmlScrollTop = styled.div`
  position: fixed;
  bottom: 4em;
  right: 2em;
  width: 4em;
  height: 4em;
  display: flex;
  display: ${({ display }) => (display === "true" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #58c0d8;
  border-radius: 50%;
  cursor: pointer;
  animation: ${FadeIn} ease-in-out forwards 1s;
  transition: opacity 0.4s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
