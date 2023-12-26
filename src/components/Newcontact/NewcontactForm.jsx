

import React from 'react'
import Button from '../../ui_components/Button/Button'
import { Backdrop } from '../../ui_components/Backdrop/Backdrop'
import {createPortal} from 'react-dom'

const Newcontact = () => {
  return (
    <>
    {createPortal(<Backdrop/>,document.getElementById('backdrop'))}
    {createPortal(<div id='modal' className='contact_form_container'>
    <div className='contact_form'>
      <h3 className='form_title'>New Contact</h3>
      <div className='close_btn'>⨉</div>
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
    </div>,document.getElementById('modal'))}
    </>
  )
}

export default Newcontact