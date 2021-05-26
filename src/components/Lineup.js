import styled from "styled-components";
import { Header, Header2 } from "./Headers";
import Overlay from "./Overlay";

const LineupImg = styled.img`
  height: 50vh;
`;

const Lineup = () => (
  <Overlay title="2021 Lineup">
    <Header2>To Be Determined...</Header2>
    <Header>2020 Lineup</Header>
    <LineupImg
      src={process.env.PUBLIC_URL + "lineups/lineup-2020.jpeg"}
      alt="2020 Lineup"
    />
    <Header>2019 Lineup</Header>
    <LineupImg
      src={process.env.PUBLIC_URL + "lineups/lineup-2019.jpeg"}
      alt="2019 Lineup"
    />
  </Overlay>
);

export default Lineup;
