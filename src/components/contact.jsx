import React from 'react'
import ContactItem from './contactItem'

const Contacts = () => {
  return (
    <div className='contact_list'>
       {[1,1,1,1,1].map(items=><ContactItem/>) }
    </div>
  )
}

export default Contacts