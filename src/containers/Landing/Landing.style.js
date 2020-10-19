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
export const ImageContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
export const PageFade = styled.div`
  height: 260px;
  width: 260px;
  opacity: 1;
  background-color: #eee;
  margin: 10px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  animation: ${FadeIn} ease-in-out forwards 1s;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;
export const Title = styled.h1`
  margin: 50px 0;
  font-wieght: bold;
  font-size: 2em;
  color: #888;
  text-transform: capitalize;
`;
export const LoadMore = styled.div`
  display: flex;
  margin: 2em 0 2em 0;
  justify-content: center;
  align-items: center;
`;
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
