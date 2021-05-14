import styled from "styled-components";
import { Header } from "./Headers";

const StyledCard = styled.div`
  background-color: rgb(255, 255, 255, 0.9);
  border-radius: 1em;
  padding: 0.5em 1em 1em 1em;
  margin: 2em;
`;

const Card = ({ title, children }) => (
  <StyledCard>
    <Header>{title}</Header>
    {children}
  </StyledCard>
);

export default Card;
