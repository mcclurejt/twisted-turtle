import "./App.css";
import { Title, Header, SubHeader } from "./components/Headers";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Link from "./components/Link";
import NavItem from "./components/NavItem";
import GetInvolved from "./pages/GetInvolved";
import Lineup from "./pages/Lineup";
import Tickets from "./pages/Tickets";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
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
