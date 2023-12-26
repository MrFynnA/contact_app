

import React from 'react'
import Button from '../../ui_components/Button/Button'
import { Backdrop } from '../../ui_components/Backdrop/Backdrop'
import {createPortal} from 'react-dom'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../store/slices/modalSlice'

const Newcontact = () => {
  const dispatch=useDispatch()
  return (
    <>
    {createPortal(<Backdrop onClick={()=>dispatch(modalActions.closeContactModal())}/>,document.getElementById('backdrop'))}
   <div id='modal'>
    {createPortal( <div className='contact_form'>
      <h3 className='form_title'>New Contact</h3>
      <div className='close_btn' onClick={()=>dispatch(modalActions.closeContactModal())}>⨉</div>
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
    </div>,document.getElementById('modal'))}
    </div>
    </>
  )
}

export default Newcontact