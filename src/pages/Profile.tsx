import { useEffect, useState } from "react";
import { getUser, User } from "../utils/user";

const Profile = () => {
  const user = getUser();
  const [userState, setUserState] = useState<User | null>(null);
  useEffect(() => {if (user) setUserState(user);
  }, [user]); 
  return (
    <div>
      <h1>Profile</h1>
      <input type="text" value={userState?.name} />
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
}

export default Profile;