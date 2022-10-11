import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserDetails from "../components/UserDetails";

const User = () => {
  return (
    <main>
      <Navbar />
      <div className='sidebar-body-container'>
        <Sidebar />
        <UserDetails />
      </div>
    </main>
  );
};

export default User;
