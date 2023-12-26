

import React from 'react'
import Button from '../../ui_components/Button/Button'

const Newcontact = () => {
  return (
    <div className='contact_form_container'>

    <div className='contact_form'>
      <h3 className='form_title'>Contact details</h3>
        <form className='form' onSubmit={''}>
          <div className='form_field'>
          <label>Name</label>
            <input type='text' placeholder='enter name'></input>
          </div>
          <div className='form_field'>
          <label> Phone number</label>
            <input type='number' placeholder='enter mobile #'></input>
          </div>
          <div className='form_field'>
          <label>Email</label>
            <input type='email' placeholder='enter email'></input>
          </div>
          <div className='form_actions'>
        <Button type='submit' width='100%'>Add Contact</Button>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Newcontact