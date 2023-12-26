

import React from 'react'
import { Backdrop } from '../../ui_components/Backdrop/Backdrop'
import {createPortal} from 'react-dom'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../store/slices/modalSlice'
import PersonIcon from '../../assets/icons/person_icon'
import EmailIcon from '../../assets/icons/email_icon'
import PhoneIcon from '../../assets/icons/phone_icon'

const ContactDetail = () => {
    const dispatch =useDispatch()
  return (
    <>
    {createPortal(<Backdrop onClick={()=>dispatch(modalActions.closeDetailModal())}/>,document.getElementById('backdrop'))}
   <div id='modal'>
    {createPortal( <div className='contact_detail'>
    <h3 className='detail_title'>Contact Detail</h3>
    <div className='close_btn' onClick={()=>dispatch(modalActions.closeDetailModal())}>⨉</div>
         <div className='contact_detail_items'>
            <div><PersonIcon/><span className='contact_detail_items_title'>Name:</span><span>{'Fynn Arthur'}</span></div>
            <div><PhoneIcon/><span className='contact_detail_items_title'>Number:</span><span>{'0545411925'}</span></div>
            <div><EmailIcon/><span className='contact_detail_items_title'>Email:</span><span>{'Fynn@gmail.com'}</span></div>
         </div>
    </div>,document.getElementById('modal'))}
    </div>
    </>
  )
}

export default ContactDetail