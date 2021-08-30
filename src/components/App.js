import SocialProfile from "./SocialProfile/profile.jsx";
import user from "./SocialProfile/user.json";
import { HighestContainer } from "./container/container.jsx";

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
    </HighestContainer>
  );
}

export default App;
