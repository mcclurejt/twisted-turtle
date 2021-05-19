import styled from "styled-components";
import MobileTitle from "../svg/mobile-title.svg";
import TicketsSVG from "../svg/mobile-tickets.svg";
import LineupSVG from "../svg/mobile-lineup.svg";
import FAQSVG from "../svg/mobile-faq.svg";
import FAQ from "./FAQ";
import Lineup from "./Lineup";
import { useState, useEffect } from "react";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Title = styled.img`
  width: 95vw;
`;

const TicketsImg = styled.img`
  display: block;
  padding: 2em 0;
  margin: 0 auto;
`;

const LineupImg = styled.img`
  display: block;
  padding: 2em 0;
  margin: 0 auto;
`;

const FAQImg = styled.img`
  display: block;
  padding: 2em 0;
  margin: 0 auto;
`;

function Mobile() {
  const [overlay, setOverlay] = useState("");

  const handleClick = (name) => {
    console.log(name);
    if (overlay === "") {
      setOverlay(name);
    } else {
      setOverlay("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", () => handleClick(""), false);
    return () =>
      document.removeEventListener("mousedown", () => handleClick(""), false);
  });
  return (
    <>
      {overlay === "lineup" ? <Lineup /> : overlay === "faq" ? <FAQ /> : null}
      <Container>
        <Title src={MobileTitle} />
        <a
          target="_blank"
          href="https://www.eventbrite.com/e/twisted-turtle-festival-2021-tickets-152770575905"
          rel="noreferrer"
        >
          <TicketsImg src={TicketsSVG} />
        </a>
        <LineupImg src={LineupSVG} onClick={() => handleClick("lineup")} />
        <FAQImg src={FAQSVG} onClick={() => handleClick("faq")} />
      </Container>
    </>
  );
}
export default Mobile;
