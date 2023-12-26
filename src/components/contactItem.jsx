import React from 'react'
import Button from '../ui_components/Button/Button'
import PersonIcon from '../assets/icons/person_icon'

const ContactItem = () => {
  return (
    <div className='contact_item'>
     <div className='contact'><PersonIcon/><h4>james arthur</h4><Button>view details</Button></div>
    </div>
  )
}

export default ContactItem