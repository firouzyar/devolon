import styled from "styled-components";

export const DrawerContainer = styled.nav`
  padding-top: 4em;
  background: #57c0d8;
  height: 100vh;
  text-align: left;
  min-width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 9;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
`;
export const ListWrapper = styled.ul`
  padding: 0;
`;
export const MenuItem = styled.li`
  font-size: 1em;
  padding: 1em;
  color: #fff;
  text-transform: capitalize;
  text-decoration: none;
  transition: color 0.3s linear;
  list-style: none;
  cursor: pointer;
  border-bottom: 1px solid #4ab3cc;
  background-color: ${({ active }) => (active ? "#38889a" : "transparent")};
  &:hover {
    background-color: #38889a;
  }
`;
