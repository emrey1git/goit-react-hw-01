import React from "react";
import Profile from "./Profile";
import FriendList from "./FriendList/FriendList"; // klasörden çekiyoruz
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";


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
