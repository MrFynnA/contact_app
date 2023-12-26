

import React from 'react'

const Newcontact = () => {
  return (
    <div>
        <form>
          <div>
          <label>Name</label>
            <input type='text'></input>
          </div>
          <div>
          <label> Phone number</label>
            <input type='number'></input>
          </div>
          <div>
          <label>Email</label>
            <input type='email'></input>
          </div>
        </form>
        <button type='submit'>Add Contact</button>
    </div>
  )
}

export default Newcontact