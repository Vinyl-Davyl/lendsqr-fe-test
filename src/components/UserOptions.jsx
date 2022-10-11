import React from "react";
import viewUser from "../images/view-user.svg";
import deleteUser from "../images/delete-user.svg";
import activateUser from "../images/activate-user.svg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
const UserOptions = () => {
  const { userId } = useGlobalContext();
  return (
    <article className='options'>
      <ul>
        <Link to={`/user-details/${userId}`}>
          <li>
            <span>
              <img src={viewUser} alt='view user details' />
            </span>
            View Details
          </li>
        </Link>
        <li>
          <span>
            <img src={deleteUser} alt='blacklist user account' />
          </span>
          Blacklist User
        </li>
        <li>
          <span>
            <img src={activateUser} alt='activate user account' />
          </span>
          Activate User
        </li>
      </ul>
    </article>
  );
};

export default UserOptions;
