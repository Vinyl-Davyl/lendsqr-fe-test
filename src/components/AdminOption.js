import React from "react";
import { Link } from "react-router-dom";

const AdminOption = () => {
  return (
    <div className='admin-options'>
      <ul>
        <Link to='/'>
          <li>Logout</li>
        </Link>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default AdminOption;
