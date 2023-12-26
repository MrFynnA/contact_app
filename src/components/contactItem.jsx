import React from 'react'
import PersonIcon from '../assets/icons/person_icon'

const ContactItem = () => {
  return (
    <div className='contact_item'>
     <div className='contact'><PersonIcon/><div>james arthur</div><button>view details</button></div>
    </div>
  )
}

export default ContactItem