import { Header2 } from "./Headers";
import Overlay from "./Overlay";
import Text from "./Text";

const FAQ = () => (
  <Overlay title="FAQ">
    <Header2>If I bought a ticket for 2020's event, is it valid?</Header2>
    <Text>
      Yes, not only is it valid for this event but the next camping event we do
      as well!
    </Text>
    <Header2>Where is it?</Header2>
    <Text>
      The venue is located in Mt Zion Illinois 62549. We will send out the exact
      address 2 weeks prior to the event to respect the privacy of the property
      owners.
    </Text>
    <Header2>What should I bring?</Header2>
    <Text>Camping supplies and positive vibes.</Text>
    <Header2>What amenities will be there?</Header2>
    <Text>There is food and water available as well as restrooms.</Text>
    <Header2>What are covid guidelines?</Header2>
    <Text>
      We will follow all local state and federal guidelines that are recommended
      at the time of the event.
    </Text>
    <Header2>What's the camping situation like?</Header2>
    <Text>
      Each ticket gives you car camping. There is enough space on the property
      to camp away from your car if you'd prefer.
    </Text>
  </Overlay>
);

export default FAQ;
