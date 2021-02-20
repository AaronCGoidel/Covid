import styled from "styled-components";

export const PostInput = styled.input`
  width: 300px;
  height: 50px;
  margin: 5px;
  padding: 15px;

  color: #000;
  font-size: 0.9em;

  border: 1px solid #888;
  border-radius: 18px;

  outline: none;
`;

export const Blob = styled.div`
  position: absolute;
  top: 0vh;
  left: 20vw;
`;

export const Blob2 = styled.div`
  position: absolute;
  bottom: 24vh;
  left: -10vw;
`;

export const Blob3 = styled.div`
  position: absolute;
  bottom: 0vh;
  right: 0vw;
`;

const Button = styled.button`
  width: 225px;
  height: 50px;
  margin: 5px;

  color: #fff;
  font-size: 0.9em;

  border: none;
  border-radius: 18px;

  cursor: pointer;
`;

export const GoBtn = styled(Button)`
  background-color: #000;
`;

export default Blob;
