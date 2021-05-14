import styled from "styled-components";

const IFrame = styled.iframe`
  margin: 0 auto;
  border: none;
  @media screen and (min-width: 850px){
    width: 720px;
    height: 540px;
  }
  @media screen and (max-width: 850px){
    width: 200px;
  }
`;

export default IFrame;
