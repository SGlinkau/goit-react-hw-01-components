// USER PROFILE
import { Profile } from './User/Profile.jsx';
import user from './User/user.json';

// STATISTICS DATA
import { Statistics } from './Data/Statistics.jsx';
import data from './Data/data.json';

// FRIENDS LIST
import { FriendsList } from './List/friendsList.jsx';
import list from './List/friends.json';

// TRANSACTIONS HISTORY
import { TransactionsHistory } from './Transactions/transactionHistory.jsx'
import history from './Transactions/transactions.json'

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={list} />
      <TransactionsHistory items={history} />;
    </>
  );
};
