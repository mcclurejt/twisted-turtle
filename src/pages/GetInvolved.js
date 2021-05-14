import styled from "styled-components";
import Page from "../components/Page";
import Card from "../components/Card"

const ApplicationLink = styled.a`
  text-decoration: none;
  color: darkslategray;
  font-weight: bold;
  display: block;
  font-size: 2em;
  background-color: salmon;
  border-radius: 1em;
  padding: 0.5em;
  margin: 1em auto;
  max-width: 20em;
`;

const GetInvolved = () => (
  <Page>
    <Card title="Get Involved">
      <ApplicationLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdsAgEZfhK2wHCRQkTNnzIEuErwVZOj8zBXOOGBpZWnhWGEWQ/viewform?fbclid=IwAR2M2-YjDGPXhZu9tSEHYXHuvem3foHpNHhZuwOjNU8MN935pX-PJ-6yb0w">
        Music Application
      </ApplicationLink>
      <ApplicationLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScMHWQb6SI3dC8qrFO420nr94gBOY6g8Q8t5v81U6Zs2H-04w/viewform?fbclid=IwAR1_U6LaTEQypxFqycQyQvqSDcsVv6Q_2xEyRwyE2CCTwlKLpbkYwTAFYm4">
        Visual Art Application
      </ApplicationLink>
      <ApplicationLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdhOs316HWuB_vXZQP1xo8IrluEj-S3t3wJFAQ7j-OAGsw1Lw/viewform?fbclid=IwAR0U0de30aa4oZDjjYwhNAMt5kVVkDaSBk6Xhke6PJfSCIPWY7sxvKnFRJQ">
        Indie Film Application
      </ApplicationLink>
      <ApplicationLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSexCd20utZEAexb-kGGPPXcIEQwLEx_AZvf4rY4A7ulAdEsVg/viewform?fbclid=IwAR3m7SVM0WFBBHirNG8eVT30LX6o1c279hXJzzfL0choRYnxaKgC_LmkVY4">
        Workshop Leader Application
      </ApplicationLink>
      <ApplicationLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfjsuFkwT_lU_CRy7y2maF0oF50rHRtbp8xs09vsohrSumCGg/viewform?fbclid=IwAR0zHTAIGgRDyH4jcdeUHYStn8hzK5QyhYk71h10buqnn13KlyYO1I70oNM">
        Comedy Application
      </ApplicationLink>
      <ApplicationLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSepMZClkaob5HuDhcW_Iu9DBJEh8JJISwFyN7lngvc2i6B-ag/viewform?fbclid=IwAR30YinCILSjryARU3WcCZqlhHrAMyp3G5aN7XgBcs3gcCAi1FISdTrgm6U">
        Flow Artist Application
      </ApplicationLink>
      <ApplicationLink target="_blank" href="https://docs.google.com/forms/u/1/d/10EQ8PYv_jZp0pXx1VK5txBWQ54pIR3qrgZ7N0AYLh5c/edit?usp=drivesdk&chromeless=1&fbclid=IwAR1bT3Ht6MllZAom3Z_U1D1IqUZM2SWasPsnsSsb_sEFUG2-1QG4eVkdToU">
        Vendor Application
      </ApplicationLink>
      <ApplicationLink target="_blank" href="https://docs.google.com/forms/d/1jMWK7ql36UODHK3TD2MVkfKonTO8jV8SgPfMwBGpKYY/edit?usp=drivesdk&fbclid=IwAR3WuUXVvBZ_52Yd5PJq8eFAiIPv1Vyvij8rYNEvennfUajkxBRdikGyHJc">
        Food/Drink Vendor Application
      </ApplicationLink>
    </Card>
  </Page>
);

export default GetInvolved;
