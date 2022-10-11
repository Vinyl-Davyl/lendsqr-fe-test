import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
import { usersData, tableHeader } from "../data";
import { FaChevronDown, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import filterBtn from "../images/filter-results-button.svg";
import options from "../images/options.svg";
import Filter from "./Filter";
import UserOptions from "./UserOptions";
import moment from "moment";
import { Link } from "react-router-dom";

const DashBody = () => {
  const [page, setPage] = useState(0);
  const [usersPage, setUsersPage] = useState([]);

  const {
    showNavbar,
    showDash,
    allUsers,
    users,
    showFilter,
    setShowFilter,
    loading,
    handleClick,
  } = useGlobalContext();

  useEffect(() => {
    if (loading) return;
    setUsersPage(users[page]);
  }, [loading, page, users]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Lendsqr - Dashboard`;
  }, []);

  // PAGE BUTTONS (NAVIGATION THROUGH THE FETCHED DATA USING THE PAGINATION FEATURE)
  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > users.length - 1) {
        return (nextPage = 0);
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        return (prevPage = users.length - 1);
      }
      return prevPage;
    });
  };

  // WHILE DATA IS BEING FETCHED FROM THE API
  if (loading) {
    return (
      <section className='dashbody center'>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className={`${showDash || showNavbar ? `d-none` : ``} dashbody`}>
      <h2 className='title'>Users</h2>

      {/* SECTION CONTAINING TOTAL USERS STATS */}
      <div className='users-data'>
        {usersData.map((card, index) => {
          const { title, icon } = card;
          return (
            <div className='card' key={index}>
              <img src={icon} alt='users icon' />
              <p>{title}</p>
              <h5>{allUsers.length.toLocaleString(`en-US`)}</h5>
            </div>
          );
        })}
      </div>

      {/* TABLE CONTAINING USER INFORMATION GOTTEN FROM THE API */}
      <div className='table-container'>
        <div className='table'>
          <div className='table-header'>
            <ul>
              {tableHeader.map((title, index) => {
                return (
                  <li key={index}>
                    {title}
                    <span>
                      <img
                        src={filterBtn}
                        alt='filter button'
                        onClick={() => setShowFilter(!showFilter)}
                      />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {usersPage.map((user) => {
            const { id, phoneNumber, orgName, userName, createdAt } = user;
            return (
              <div className='table-user' id={id} key={id}>
                <Link to={`/user-details/${id}`}>
                  <p className='organisation'>{orgName}</p>
                </Link>
                <Link to={`/user-details/${id}`}>
                  <p>{userName}</p>
                </Link>
                <Link to={`/user-details/${id}`}>
                  <p className='number'>{phoneNumber}</p>
                </Link>
                <Link to={`/user-details/${id}`}>
                  <p className='date'>
                    {moment(createdAt).format("MMM Do YYYY, h:mm:ss a")}
                  </p>
                </Link>
                <div>
                  <h6 className='active'>Active</h6>
                  <img
                    src={options}
                    alt='options icon'
                    className='options-icon'
                    onClick={handleClick}
                  />

                  {/* OPTIONS COMPONENT ACCESSIBLE BY CLICKING THE KEBAB MENU ON THE TABLE */}
                  <UserOptions />
                </div>
              </div>
            );
          })}

          {/* FILTER COMPONENT */}
          <Filter />
        </div>
      </div>

      {/* PAGINATION AT THE BOTTOM OF THE PAGE */}
      <div className='filter-pages-container'>
        <div className='filter'>
          <p>
            Showing{" "}
            <span className='no'>
              15{" "}
              <span>
                <FaChevronDown />
              </span>
            </span>{" "}
            out of 100
          </p>
        </div>
        <div className='pages'>
          <button onClick={prevPage}>
            <FaChevronLeft />
          </button>
          {users.map((item, index) => {
            return (
              <p
                key={index}
                className={`${index === page ? `active-page` : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </p>
            );
          })}
          <button onClick={nextPage}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashBody;
