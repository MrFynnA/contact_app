import React from 'react'
import ContactItem from './contactItem'
import { useSelector } from 'react-redux'

const Contacts = () => {
  const contacts=useSelector(state=>state.contactsItems.contacts)
  return (
    <div className='contact_list'>
       {contacts.map(items=><ContactItem key={items.id} name={items.name}/>) }
    </div>
  )
}

export default Contacts