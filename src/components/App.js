import SocialProfile from "./SocialProfile/profile.jsx";
import user from "./SocialProfile/user.json";
import { HighestContainer } from "./container/container.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import statisticalData from "./Statistics/statistical-data.json";

function App() {
  return (
    <HighestContainer>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />,
    </HighestContainer>
  );
}

export default App;
