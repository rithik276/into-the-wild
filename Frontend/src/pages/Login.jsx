import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { useDarkMode } from "../context/DarkModeContext";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
const SpanLight = styled.span`
  margin: -33px 155px;
  font-size: 23px;
  font-weight: bold;
  color: black;
`;

const SpanDark = styled.span`
  margin: -33px 155px;
  font-size: 23px;
  font-weight: bold;
  color: white;
`;
function Login() {
  const { isDarkMode } = useDarkMode();
  return (
    <LoginLayout>
      <Logo />
      {isDarkMode ? (
        <SpanDark>INTO THE WILD</SpanDark>
      ) : (
        <SpanLight>INTO THE WILD</SpanLight>
      )}
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
