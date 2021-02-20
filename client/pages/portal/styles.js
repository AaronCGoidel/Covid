import styled from "styled-components";

export const BGContainer = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  position: absolute;

  z-index: -1;
`;

export const Blob = styled.div`
  position: absolute;
  top: 0vh;
  left: 20vw;
`;

export const Dude = styled.div`
  position: absolute;
  bottom: 14vh;
  left: 0vw;
`;

export const Dude2 = styled.div`
  position: absolute;
  bottom: 6vh;
  right: 0vw;
`;

export const SignInContainer = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10vw;
`;

const Button = styled.button`
  width: 275px;
  height: 50px;
  margin: 5px;

  color: #fff;
  font-size: 0.9em;

  border: none;
  border-radius: 18px;

  cursor: pointer;
`;

export const FBButton = styled(Button)`
  background-color: #4267b2;
`;

export const GoogleButton = styled(Button)`
  background-color: #db4437;
`;

export const Splash = styled.h1`
  font-size: 4rem;
  color: #000;
  text-align: center;
  font-family: Lobster, serif;
  margin-top: 0;
`;

export default SignInContainer;
