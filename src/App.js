import "./App.css";
import Background from "./components/Background";
import TitleSVG from "./svg/title.svg";
import PresentedSVG from "./svg/presented.svg";
import TTSVG from "./svg/tt.svg";
import styled from "styled-components";

const TitleImage = styled.img`
  padding-top: 2vh;
  width: 75vw;
`;

const PresentedBy = styled.img`
  display: block;
  margin: 0 auto;
  width: 5vw;
`;

const TT = styled.img`
  display: block;
  margin: 0 auto;
  width: 20vw;
`;
const App = () => {
  return (
    <div className="App">
      <div>
        <TitleImage src={TitleSVG}></TitleImage>
        <PresentedBy src={PresentedSVG}></PresentedBy>
        <TT src={TTSVG}></TT>
      </div>
      <Background />
    </div>
  );
};

export default App;
