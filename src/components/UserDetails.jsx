import React, { useState, useEffect, useCallback } from "react";
import backArrow from "../images/back-arrow.svg";
import ratedStar from "../images/rated-star.svg";
import unratedStar from "../images/unrated-star.svg";
import { useGlobalContext } from "./Context";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const UserDetails = () => {
  const { showNav, showDash } = useGlobalContext();
  const [userDetails, setUserDetails] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Lendsqr - User Details`;
  });

  // FETCH USER DETAILS
  const fetchUserDetails = useCallback(async () => {
    setLoading(true);
    let url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id} `;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id, setLoading]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails, id]);

  // WHILE FETCHING CUSTOMER DETAILS FROM THE API
  if (loading) {
    return <Loading />;
  }

  const {
    accountBalance,
    accountNumber,
    education,
    email,
    guarantor,
    profile,
    socials,
  } = userDetails;

  // DESTRUCTING THE OBJECTS GOTTEN FROM THE API
  const { address, avatar, bvn, firstName, gender, lastName, phoneNumber } =
    profile;

  const {
    duration,
    employmentStatus,
    level,
    loanRepayment,
    monthlyIncome,
    officeEmail,
    sector,
  } = education;

  const { facebook, instagram, twitter } = socials;

  const {
    firstName: guarantorFirstName,
    lastName: guarantorLastName,
    phoneNumber: guarantorPhoneNum,
    gender: guarantorGender,
    address: guarantorAddress,
  } = guarantor;

  return (
    <section className={`${showDash || showNav ? `d-none` : ``} user-details`}>
      <Link to='/dashboard'>
        <div className='navigation'>
          <span>
            <img src={backArrow} alt='back to dashboard arrow' />
          </span>
          <h4>Back to Users</h4>
        </div>
      </Link>

      <div className='header'>
        <h2 className='title'>User Details</h2>
        <div className='btns'>
          <button className='red-btn'>Blacklist User</button>
          <button className='green-btn'>Activate User</button>
        </div>
      </div>

      {/* SECTION CONTAINING THE BASIC DETAILS ABOUT THE CUSTOMER */}
      <div className='basic-info'>
        <div className='info'>
          <div className='user-img'>
            <img src={avatar} alt='user' />
          </div>
          <div className='user-name'>
            <h3>{`${firstName} ${lastName}`}</h3>
            <p>{accountNumber}</p>
          </div>
          <div className='user-tier'>
            <h3>User's Tier</h3>
            <div className='ratings'>
              <img src={ratedStar} alt='ratings star' />
              <img src={unratedStar} alt='ratings star' />
              <img src={unratedStar} alt='ratings star' />
            </div>
          </div>
          <div className='user-balance'>
            <h3>{`₦${Math.ceil(accountBalance * 700).toLocaleString(
              `us-EN`
            )}`}</h3>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className='tabs'>
          <ul>
            <li className='selected'>General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </div>
      </div>

      {/* SECTION CONTAINING ALL THE DETAILS ABOUT THE CUSTOMER */}
      <section className='info-block'>
        <article className='personal-info'>
          <h3 className='article-title'>Personal Information</h3>
          <div className='content'>
            <div>
              <h5>full Name</h5>
              <p>{`${firstName} ${lastName}`}</p>
            </div>
            <div>
              <h5>Phone Number</h5>
              <p>{phoneNumber}</p>
            </div>
            <div>
              <h5>Email Address</h5>
              <p>{email}</p>
            </div>
            <div>
              <h5>Bvn</h5>
              <p>{bvn}</p>
            </div>
            <div>
              <h5>Gender</h5>
              <p>{gender}</p>
            </div>
            <div>
              <h5>Residence</h5>
              <p>{address}</p>
            </div>
          </div>
        </article>
        <div className='underline'></div>
        <article className='education-employment'>
          <h3 className='article-title'>Education and Employment</h3>
          <div className='content'>
            <div>
              <h5>level of education</h5>
              <p>{level}</p>
            </div>
            <div>
              <h5>employment status</h5>
              <p>{employmentStatus}</p>
            </div>
            <div>
              <h5>sector of employment</h5>
              <p>{sector}</p>
            </div>
            <div>
              <h5>Duration of employment</h5>
              <p>{duration}</p>
            </div>
            <div>
              <h5>office email</h5>
              <p>{officeEmail}</p>
            </div>
            <div>
              <h5>Monthly income</h5>
              <p>{`₦${Math.ceil(monthlyIncome[1] * 700).toLocaleString(
                `en-US`
              )} - ₦${Math.ceil(monthlyIncome[0] * 700).toLocaleString(
                `en-US`
              )} `}</p>
            </div>
            <div>
              <h5>loan repayment</h5>
              <p>{`₦${Math.ceil(loanRepayment * 700).toLocaleString(
                `en-US`
              )}`}</p>
            </div>
          </div>
        </article>
        <div className='underline'></div>
        <article className='socials'>
          <h3 className='article-title'>Socials</h3>
          <div className='content'>
            <div>
              <h5>Facebook</h5>
              <p>{facebook}</p>
            </div>
            <div>
              <h5>Instagram</h5>
              <p>{instagram}</p>
            </div>
            <div>
              <h5>Twitter</h5>
              <p>{twitter}</p>
            </div>
          </div>
        </article>
        <div className='underline'></div>
        <article className='guarantor'>
          <h3 className='article-title'>Guarantor</h3>
          <div className='content'>
            <div>
              <h5>full Name</h5>
              <p>{`${guarantorFirstName} ${guarantorLastName}`}</p>
            </div>
            <div>
              <h5>Phone Number</h5>
              <p>{guarantorPhoneNum}</p>
            </div>
            <div>
              <h5>Gender</h5>
              <p>{guarantorGender}</p>
            </div>
            <div>
              <h5>Address</h5>
              <p>{guarantorAddress}</p>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default UserDetails;
