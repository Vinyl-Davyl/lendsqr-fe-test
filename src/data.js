// IMAGES FOR CUSTOMERS SERVICES
import users from "./images/users.svg";
import guarantor from "./images/guarantors.svg";
import loans from "./images/loans.svg";
import handshake from "./images/handshake.svg";
import savings from "./images/piggy-bank.svg";
import loanRequests from "./images/loan-request.svg";
import whitelist from "./images/whitelist.svg";
import karma from "./images/karma.svg";

// IMAGES FOR BUSINESSES SERVICES
import briefcase2 from "./images/briefcase-2.svg";
import loanProducts from "./images/loan-request.svg";
import bank from "./images/bank.svg";
import coins from "./images/coins.svg";
import transaction from "./images/transaction.svg";
import galaxy from "./images/galaxy.svg";
import userGear from "./images/user-gear.svg";
import scroll from "./images/scroll.svg";
import barChart from "./images/chart-bar.svg";

// IMAGES FOR SETTINGS
import slider from "./images/sliders.svg";
import badgePercent from "./images/badge-percent.svg";
import clipboard from "./images/clipboard-list.svg";

// ICONS FOR USERS DATA SECTION (DASHBOARD BODY *Dashbody* )
import dataUsers from "./images/data-users.svg";
import dataUsersGroup from "./images/data-users-group.svg";
import dataLoans from "./images/data-loans.svg";
import dataSavings from "./images/data-savings.svg";

const sidebarList = [
  // CUSTOMERS
  [
    { icon: users, title: `Users` },
    { icon: guarantor, title: "Guarantors" },
    { icon: loans, title: "Loans" },
    { icon: handshake, title: "Decision Models" },
    { icon: savings, title: "Savings" },
    { icon: loanRequests, title: "Loan Requests" },
    { icon: whitelist, title: "Whitelist" },
    { icon: karma, title: "Karma" },
  ],

  //   BUSINESSES
  [
    { icon: briefcase2, title: `Organization` },
    { icon: loanProducts, title: "Loan Products" },
    { icon: bank, title: "Savings Products" },
    { icon: coins, title: "Fees and Charges" },
    { icon: transaction, title: "Transactions" },
    { icon: galaxy, title: "Services" },
    { icon: userGear, title: "Service Account" },
    { icon: scroll, title: "Settlements" },
    { icon: barChart, title: "Reports" },
  ],
  //   SETTINGS
  [
    { icon: slider, title: `Preferences` },
    { icon: badgePercent, title: "Fees and Pricing" },
    { icon: clipboard, title: "Audit Logs" },
  ],
];

const usersData = [
  { title: `USERS`, icon: dataUsers, num: 2453 },
  { title: `ACTIVE USERS`, icon: dataUsersGroup, num: 2453 },
  { title: `USERS  WITH LOANS`, icon: dataLoans, num: 12453 },
  { title: `USERS  WITH SAVINGS`, icon: dataSavings, num: 102453 },
];

const tableHeader = [
  `organization`,
  `Username`,
  `Phone number`,
  `Date joined`,
  `Status`,
];

export { sidebarList, usersData, tableHeader };
