

import React from 'react'
import { Backdrop } from '../../ui_components/Backdrop/Backdrop'
import {createPortal} from 'react-dom'
import { useDispatch,useSelector } from 'react-redux'
import { modalActions } from '../../store/slices/modalSlice'
import PersonIcon from '../../assets/icons/person_icon'
import EmailIcon from '../../assets/icons/email_icon'
import PhoneIcon from '../../assets/icons/phone_icon'
import EditContactIcon from '../../assets/icons/EditContact_icon'



const ContactDetail = () => {
    const dispatch =useDispatch()
    const contactDetail=useSelector(state=>state.contactsItems.contactDetail)
  return (
    <>
    {createPortal(<Backdrop onClick={()=>dispatch(modalActions.closeDetailModal())}/>,document.getElementById('backdrop'))}
   <div id='modal'>
    {createPortal( <div className='contact_detail'>
    <h3 className='detail_title'>Contact Detail</h3>
    <div className='close_btn' onClick={()=>dispatch(modalActions.closeDetailModal())}>⨉</div>
         <div className='contact_detail_items'>
            <div><PersonIcon/><span className='contact_detail_items_title'>Name:</span><span>{contactDetail.name}</span></div>
            <div><PhoneIcon/><span className='contact_detail_items_title'>Number:</span><span>{contactDetail.phone}</span></div>
            <div><EmailIcon/><span className='contact_detail_items_title'>Email:</span><span>{contactDetail.email}</span></div>
         </div>
         <div className='Edit_btn' onClick={()=>{
            dispatch(modalActions.closeDetailModal())
            dispatch(modalActions.setEditModalActive())
         }}><EditContactIcon/>Edit</div>
    </div>,document.getElementById('modal'))}
    </div>
    </>
  )
}

export default ContactDetail