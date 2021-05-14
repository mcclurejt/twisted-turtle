import styled from "styled-components";
import Page from "../components/Page";
import Card from "../components/Card";
import IFrame from "../components/IFrame";

const Image = styled.img`
  width: 100%;
`;

const BuyTicketsButton = styled.a`
  text-decoration: none;
  display: block;
  color: white;
  background-color: green;
  border-radius: 1em;
  margin: 1em auto;
  padding: 0.5em;
  width: 25em;
`;

const Home = () => (
  <Page>
    <Card title="Tickets On Sale NOW!">
        <BuyTicketsButton target="_blank" href="https://www.eventbrite.com/e/twisted-turtle-festival-tickets-71186347281">GET YOUR 3 DAY PASS HERE</BuyTicketsButton>
    </Card>
    <Card title="2019 After-Movie">
      <IFrame src="https://www.youtube.com/embed/p1AMwocseVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IFrame>
    </Card>
    <Card title="2019 Lineup">
      <Image src="https://twistedturtlefestival.files.wordpress.com/2020/03/89245426_519244552126835_6956600607125798912_o.jpg?w=1550" />
    </Card>
  </Page>
)

export default Home;
