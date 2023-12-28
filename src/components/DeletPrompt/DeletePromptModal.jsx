

import React from 'react'
import { Backdrop } from '../../ui_components/Backdrop/Backdrop'
import {createPortal} from 'react-dom'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../store/slices/modalSlice'
import Button from '../../ui_components/Button/Button'


const DeletPromptModal = (props) => {
  const{onClick}=props
    const dispatch =useDispatch()
  return (
    <>
    {createPortal(<Backdrop onClick={()=>dispatch(modalActions.closeDeleteModal())}/>,document.getElementById('backdrop'))}
   <div id='modal'>
    {createPortal( <div className='delete_prompt'>
    <h3 className='delete_title'>Delete Contact</h3>
         <div className='delete_detail'>
            <div><h4>Are you sure you want to delete this contact?</h4></div>
            <div className='delete_actions'><Button className='delete_Btn' onClick={onClick}>DELETE</Button><Button onClick={()=>dispatch(modalActions.closeDeleteModal())}>CANCEL</Button></div>
         </div>
    </div>,document.getElementById('modal'))}
    </div>
    </>
  )
}

export default DeletPromptModal