import React from "react";
import { sidebarList } from "../data";
import briefcase from "../images/briefcase.svg";
import home from "../images/home.svg";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { showDash } = useGlobalContext();
  return (
    <aside className={`${showDash && `show`}`}>
      <ul>
        <li className='org'>
          <img src={briefcase} alt='briefcase' className='icon' />
          <span>Switch Organization</span>
        </li>
        <li>
          <img src={home} alt='home' className='icon' /> <span>Dashboard</span>
        </li>
      </ul>

      <h4>CUSTOMERS</h4>
      <ul>
        {sidebarList[0].map((item, index) => {
          const { icon, title } = item;
          return (
            <li key={index}>
              <img src={icon} alt={title} className='icon' />
              <span>{title}</span>
            </li>
          );
        })}
      </ul>

      <h4>BUSINESSES</h4>
      <ul>
        {sidebarList[1].map((item, index) => {
          const { icon, title } = item;
          return (
            <li key={index}>
              <img src={icon} alt={title} className='icon' />
              <span>{title}</span>
            </li>
          );
        })}
      </ul>

      <h4>SETTINGS</h4>
      <ul>
        {sidebarList[2].map((item, index) => {
          const { icon, title } = item;
          return (
            <li key={index}>
              <img src={icon} alt={title} className='icon' />
              <span>{title}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
