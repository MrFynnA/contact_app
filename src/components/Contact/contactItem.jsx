import React from 'react'
import Button from '../../ui_components/Button/Button'
import PersonIcon from '../../assets/icons/person_icon'
import TrashIcon from '../../assets/icons/trash_icon'
import { useDispatch } from 'react-redux'
import { contactActions } from '../../store/slices/contactSlice'

const ContactItem = (props) => {
  const dispatch=useDispatch()
  const{name,id}=props
  return (
    <div className='contact_item'>
     <div className='contact'><PersonIcon/><h4>{name}</h4><div className='contact_actions'><Button>view details</Button><Button className='contact_actions_trash' onClick={()=>dispatch(contactActions.deleteContact(id))}><TrashIcon pathClassname={'trash_icon_path'}/></Button></div></div>
    </div>
  )
}

export default ContactItem