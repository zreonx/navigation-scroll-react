import React from "react";
import { useNav } from "../hooks/useNav";

const Profile = () => {
  const profileRef = useNav("Profile");
  return (
    <section ref={profileRef} id='profileSection'>
      <h2>Profile</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit
        quisquam quaerat officia expedita est quasi ab magni. Asperiores, iusto!
      </p>
    </section>
  );
};

export default Profile;
