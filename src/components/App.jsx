import { Profile } from "./Profile/Profile";
import userData from "../backend-data/user.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile {...userData} />
    </div>
  );
};
