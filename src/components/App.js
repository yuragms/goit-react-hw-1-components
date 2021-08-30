import "./App.css";
import SocialProfile from "./SocialProfile/profile";
import user from "./SocialProfile/user.json";

function App() {
  return (
    <div className="App">
      Hello world
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
