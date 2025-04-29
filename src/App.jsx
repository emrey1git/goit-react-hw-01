import Profile from "./Profile.jsx";
import FriendList from "./friendList/FriendList.jsx";
import TransactionHistory from "./transactionHistory/TransactionHistory.jsx";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => (
  <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
