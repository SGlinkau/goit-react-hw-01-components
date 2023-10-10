// USER PROFILE
import { Profile } from './User/Profile.jsx';
import user from './User/user.json';

// STATISTICS DATA
import { Statistics } from './Data/Statistics.jsx';
import data from './Data/data.json';

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
    </>
  );
};
