import React from "react";
import user from "../src/components/user-card/user.json";
import Profile from "./components/user-card/user-card";
import statisticalData from '../src/components/statistics-section/statistical-data.json';
import Statistics from './components/statistics-section/statistics-section';
import FriendList from './components/friend-list/friend-list';
import friends from '../src/components/friend-list/friends.json';
import transactions from '../src/components/transaction-history/transactions.json';
import TransactionHistory from './components/transaction-history/transaction-history';

const App = () => (
  <div className="main">
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
)

export default App;
