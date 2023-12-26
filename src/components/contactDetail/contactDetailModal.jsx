

import React from 'react'
import { Backdrop } from '../../ui_components/Backdrop/Backdrop'
import {createPortal} from 'react-dom'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../store/slices/modalSlice'

const ContactDetail = () => {
    const dispatch =useDispatch()
  return (
    <>
    {createPortal(<Backdrop onClick={()=>dispatch(modalActions.closeContactModal())}/>,document.getElementById('backdrop'))}
   <div id='modal'>
    {createPortal( <div className='contact_detail'>
    <h3 className='detail_title'>Contact Detail</h3>
         <div className='contact_detail_items'>
            <div><span>Name:</span><span>{'Fynn Arthur'}</span></div>
            <div><span>Number:</span><span>{'0545411925'}</span></div>
            <div><span>Email:</span><span>{'Fynn@gmail.com'}</span></div>
         </div>
    </div>,document.getElementById('modal'))}
    </div>
    </>
  )
}

export default ContactDetail