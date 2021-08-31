import SocialProfile from "./SocialProfile/profile.jsx";
import user from "./SocialProfile/user.json";
import { HighestContainer } from "./container/container.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import statisticalData from "./Statistics/statistical-data.json";
import FriendList from "./Friends/friendsList.jsx";
import friends from "./Friends/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "./TransactionHistory/transactions.json";

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
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </HighestContainer>
  );
}

export default App;
