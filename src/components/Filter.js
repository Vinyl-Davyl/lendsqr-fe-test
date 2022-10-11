import React from "react";
import { useGlobalContext } from "./Context";

const Filter = () => {
  const { showFilter } = useGlobalContext();
  return (
    <article className={`${showFilter && `show`} filter-container`}>
      <form action=''>
        <label htmlFor='oranization'>Organization</label>
        <br />
        <select name='organization' id='organization'>
          <option value='select' defaultValue hidden>
            select
          </option>
          <option value='select'>select</option>
          <option value='select'>select</option>
        </select>
        <label htmlFor='username'>Username</label>
        <br />
        <input type='text' name='username' id='username' placeholder='User' />
        <label htmlFor='email'>Email</label>
        <br />
        <input type='text' name='email' id='email' placeholder='Email' />
        <label htmlFor='date'>Date</label>
        <br />
        <input type='date' name='date' id='date' placeholder='Date' />
        <label htmlFor='phone-number'>Phone Number</label>
        <br />
        <input
          type='tel'
          name='phone-number'
          id='phone-number'
          placeholder='Phone Number'
        />
        <label htmlFor='status'>Status</label>
        <br />
        <select name='organization' id='organization'>
          <option value='select' defaultValue hidden>
            select
          </option>
          <option value='select'>select</option>
          <option value='select'>select</option>
        </select>

        <div className='btns'>
          <button>Reset</button>
          <button className='filter-btn'>Filter</button>
        </div>
      </form>
    </article>
  );
};

export default Filter;
