import { useState, useEffect } from "react";
import styled from "styled-components";
import TitleSVG from "../svg/title.svg";
import PresentedSVG from "../svg/presented.svg";
import TTSVG from "../svg/tt.svg";
import Lineup from "./Lineup";
import FAQ from "./FAQ";
import DatesSVG from "../svg/dates-desktop.svg";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

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

const Hill = styled.svg`
  position: absolute;
  bottom: 0;
  height: auto;
  pointer-events: none;
`;

const CenterHill = styled(Hill)`
  left: 15vw;
  bottom: 8vh;
  z-index: 0;
  width: 90vw;
`;

const LeftHill = styled(Hill)`
  left: 0;
  z-index: 1;
  width: 65vw;
`;

const RightHill = styled(Hill)`
  right: 0;
  z-index: 2;
  width: 65vw;
`;

const Sun = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  width: 10vw;
  height: auto;
`;

const Tree = styled.svg`
  position: absolute;
  left: 8vw;
  bottom: 10vh;
  width: 15vw;
  height: auto;
  z-index: 2;
`;

const Hammock = styled.img`
  position: absolute;
  right: 8vw;
  bottom: 12vh;
  width: 25vw;
  height: auto;
  z-index: 3;
`;

const BrownTurtle = styled.img`
  position: absolute;
  right: 11vw;
  bottom: 13vh;
  width: 14vw;
  height: auto;
  z-index: 4;
  transform: rotate(70.68deg);
`;

const GreenTurtle = styled.img`
  position: absolute;
  left: 18vw;
  bottom: 7vw;
  width: 10vw;
  height: auto;
  z-index: 3;
`;

const RedTurtle = styled.img`
  position: absolute;
  left: 65vw;
  bottom: 17vw;
  width: 5vw;
  height: auto;
  z-index: 3;
`;

const Dates = styled.img`
  padding: 2em 2em;
  width: 30vh;
`;

const TextPath = styled.textPath`
  z-index: 100;
`;

const Text = styled.text`
  font-family: "Spicy Rice", cursive;
  font-size: 4em;
  filter: drop-shadow(-10px 10px 5px rgb(0, 0, 0, 0.25));
  stroke: #fff;
  pointer-events: all;
`;

const Tickets = styled(Text)`
  fill: #b35ca4;
`;

const LineupText = styled(Text)`
  fill: #ff7878;
`;

const FAQText = styled(Text)`
  fill: #00afba;
`;

function Desktop() {
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
        <div>
          <TitleImage src={TitleSVG}></TitleImage>
          <PresentedBy src={PresentedSVG}></PresentedBy>
          <TT src={TTSVG}></TT>
          <Dates src={DatesSVG} />
        </div>
        <CenterHill
          width="1663"
          height="400"
          viewBox="0 0 1663 332"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="center-hill"
            d="M798.5 1.56082C1541 -26.4392 1662.5 331.561 1662.5 331.561H0C0 331.561 56 29.5608 798.5 1.56082Z"
            fill="#63CB5A"
          />
          <Tickets dy="1em" fill="white">
            <a
              target="_blank"
              href="https://www.eventbrite.com/e/twisted-turtle-festival-2021-tickets-152770575905"
              rel="noreferrer"
            >
              <TextPath
                id="center-hill-text"
                href="#center-hill"
                startOffset="94%"
                fill="#b35ca4"
              >
                Tickets
              </TextPath>
            </a>
          </Tickets>
        </CenterHill>
        <LeftHill
          width="1474"
          height="477"
          viewBox="0 0 1474 477"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="left-hill"
            d="M0 0C702 3 1315 227.5 1473.5 477H0V0Z"
            fill="#69EA9D"
          />
          <LineupText dy="1em">
            <TextPath
              id="left-hill-text"
              href="#left-hill"
              startOffset="20%"
              side="right"
              cursor="pointer"
              onClick={() => handleClick("lineup")}
            >
              Lineup
            </TextPath>
          </LineupText>
        </LeftHill>
        <RightHill
          width="1616"
          height="355"
          viewBox="0 0 1616 355"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="right-hill"
            d="M0 355C0 355 457.141 0 1616 0V355H0Z"
            fill="#B6FBC5"
          />
          <FAQText dy="1em">
            <TextPath
              id="right-hill-text"
              href="#right-hill"
              startOffset="18%"
              cursor="pointer"
              onClick={() => handleClick("faq")}
            >
              FAQ
            </TextPath>
          </FAQText>
        </RightHill>
        <Sun
          id="sun-svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            id="sun"
            d="M 0 0 C 0 100, 100 100, 100 100 V 0 Z"
            fill="rgba(255, 230, 0, 1)"
          />
        </Sun>
        <Tree
          width="385"
          height="567"
          viewBox="0 0 385 567"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M148.954 455.5C110.454 521.5 48.9536 514 64.4536 535.5C79.9536 557 268.454 555.5 322.954 535.5C377.454 515.5 258.954 508.5 237.454 455.5C215.954 402.5 237.454 244 237.454 244H148.954C148.954 244 187.454 389.5 148.954 455.5Z"
              fill="#986D00"
            />
            <path
              d="M23.9656 259.667C50.0002 318.319 113.799 283.129 113.799 283.129C113.799 283.129 152.139 330.606 198.58 326.781C245.02 322.956 275.5 270.58 275.5 270.58C275.5 270.58 354.104 281.492 367.017 245.48C379.931 209.468 335.014 161.451 335.014 161.451C335.014 161.451 382.042 162.054 379.931 123.802C377.82 85.5506 307.503 63.2361 307.503 63.2361C307.503 63.2361 318.732 11.4002 251.357 5.39817C183.982 -0.603879 148.801 63.2361 148.801 63.2361C148.801 63.2361 68.8824 33.7715 36.8792 83.8321C4.87607 133.893 36.8792 176.273 36.8792 176.273C36.8792 176.273 -2.06895 201.014 23.9656 259.667Z"
              fill="#005B3A"
            />
            <path
              d="M23.9656 259.667C50.0002 318.319 113.799 283.129 113.799 283.129C113.799 283.129 152.139 330.606 198.58 326.781C245.02 322.956 275.5 270.58 275.5 270.58C275.5 270.58 354.104 281.492 367.017 245.48C379.931 209.468 335.014 161.451 335.014 161.451C335.014 161.451 382.042 162.054 379.931 123.802C377.82 85.5506 307.503 63.2361 307.503 63.2361C307.503 63.2361 318.732 11.4002 251.357 5.39817C183.982 -0.603879 148.801 63.2361 148.801 63.2361C148.801 63.2361 68.8824 33.7715 36.8792 83.8321C4.87607 133.893 36.8792 176.273 36.8792 176.273C36.8792 176.273 -2.06895 201.014 23.9656 259.667Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="385"
              height="566.068"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-5" dy="5" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="380"
              y1="62.5"
              x2="15"
              y2="247"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D160" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </Tree>
        <Hammock src={process.env.PUBLIC_URL + "hammock.png"} alt="" />
        <BrownTurtle src={process.env.PUBLIC_URL + "brown-turtle.png"} alt="" />
        <GreenTurtle src={process.env.PUBLIC_URL + "green-turtle.png"} alt="" />
        <RedTurtle src={process.env.PUBLIC_URL + "red-turtle.png"} alt="" />
      </Container>
    </>
  );
}

export default Desktop;
