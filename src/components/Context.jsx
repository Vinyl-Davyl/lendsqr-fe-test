import React, { useContext, useEffect, useState } from "react";
import paginate from "./Paginate";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDash, setShowDash] = useState(false);
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState();

  const fetchUsers = async () => {
    setLoading(true);
    let url;
    url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
    const response = await fetch(url);
    const data = await response.json();
    setAllUsers(data);
    setUsers(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
  const handleClick = (e) => {
    const clicked = e.target.nextElementSibling;
    clicked.classList.toggle(`show`);

    setUserId(e.target.parentElement.parentElement.getAttribute(`id`));
  };

  return (
    <AppContext.Provider
      value={{
        showDash,
        showNavbar,
        setShowDash,
        setShowNavbar,
        allUsers,
        users,
        showFilter,
        setShowFilter,
        loading,
        setLoading,
        handleClick,
        userId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
