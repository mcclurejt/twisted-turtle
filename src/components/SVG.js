import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Hill = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  font-size: 0.25em;
`;

const CenterHill = styled(Hill)`
  left: 0;
  /* height: auto; */
  z-index: 0;
`;

const LeftHill = styled(Hill)`
  left: 0;
  z-index: 1;
`;

const RightHill = styled(Hill)`
  right: 0;
  z-index: 2;
`;


const Lineup = () => (
  <Container>
    <CenterHill id="center-hill-svg" width="200" height="50" viewBox="0 0 200 50" preserveAspectRatio="none">
      <path id="center-hill" d="M 25 40 C 25 0, 175 0, 190 25 V 100 H 10 Z" fill="rgba(99,203,90,1)"/>
      <text dy="-0.25em">
        <textPath id="center-hill-text" href="#center-hill" startOffset="23%">
          Tickets
        </textPath>
      </text>
    </CenterHill>
    <LeftHill id="left-hill-svg" width="200" height="50" viewBox="0 0 200 50" preserveAspectRatio="none">
      <path id="left-hill" d="M 0 15 C 75 10, 125 30, 140 50 H 0 Z" fill="rgba(105,234,157,1)"/>
      <text dy="-0.25em">
        <textPath id="left-hill-text" href="#left-hill" startOffset="12%">
          Lineup
        </textPath>
      </text>
    </LeftHill>
    <RightHill id="right-hill-svg" width="200" height="50" viewBox="0 0 200 50" preserveAspectRatio="none">
      <path id="right-hill" d="M 60 50 C 100 25, 150 15, 200 20 V 100 Z" fill="rgba(182,251,197,1)"/>
      <text dy="-0.25em">
        <textPath id="right-hill-text" href="#right-hill" startOffset="20%">
          FAQ
        </textPath>
      </text>
    </RightHill>
    <svg id="sun-svg" width="10" height="10" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path id="sun" d="M 0 0 C 0 100, 100 100, 100 100 V 0 Z" fill="rgba(255, 230, 0, 1)"/>
    </svg>
    <svg id="tree-svg" width="10" height="10" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path id="trunk" d="M 0 0 C 0 100, 100 100, 100 100 V 0 Z" fill="rgba(255, 230, 0, 1)"/>
    </svg>
  </Container>
);

export default Lineup;
