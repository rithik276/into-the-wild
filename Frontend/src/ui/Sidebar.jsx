import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useDarkMode } from "../context/DarkModeContext";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const SpanLight = styled.span`
  margin: -36px 51px -4px;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

const SpanDark = styled.span`
  margin: -36px 51px -4px;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

function Sidebar() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledSidebar>
      <Logo />
      {isDarkMode ? (
        <SpanDark>INTO THE WILD</SpanDark>
      ) : (
        <SpanLight>INTO THE WILD</SpanLight>
      )}
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
