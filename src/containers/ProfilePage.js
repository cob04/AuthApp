import React from "react";
import Profile, { ProfileWithNoData } from "../components/Profile";

const ProfilePage = props => {
  if (!props.user) {
    return <ProfileWithNoData />;
  }
  return <Profile user={props.user} />;
};

export default ProfilePage;
