import styled from "styled-components";
import { Header } from "./Headers";

const StyledOverlay = styled.div`
  background-color: rgb(255, 255, 255, 0.95);
  border-radius: 1em;
  padding: 1em 2em 2em 2em;
  margin: 4em auto;
  z-index: 100;
  width: fit-content;
`;

const Overlay = ({ title, children }) => (
  <StyledOverlay>
    <Header>{title}</Header>
    {children}
  </StyledOverlay>
);

export default Overlay;
