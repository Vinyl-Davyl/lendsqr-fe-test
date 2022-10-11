import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashBody from "../components/DashBody";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Lendsqr - Dashboard`;
  }, []);

  return (
    <main className='dashboard'>
      <Navbar />
      <div className='sidebar-body-container'>
        <Sidebar />
        <DashBody />
      </div>
    </main>
  );
};

export default Dashboard;
