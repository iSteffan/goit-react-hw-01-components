import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from "../backend-data/user.json"
import data from '../backend-data/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
