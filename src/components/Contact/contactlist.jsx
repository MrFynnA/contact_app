import React from 'react'
import ContactItem from './contactItem'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useEffect } from 'react'
const Contacts = () => {
  const contacts=useSelector(state=>state.contactsItems.contacts)
  const contact=useMemo(()=>(contacts),[contacts])
  //  useEffect(()=>{
  //            const addRequest=async()=>{
  //            const url='http://localhost:8080/contacts'
  //            const res= await fetch(url,{
  //             method:'POST',
  //             body:JSON.stringify()
  //            })
   
  //            }
  //  },[contact])

  return (
    <div className='contact_list'>
       {contacts.map(items=><ContactItem key={items.id} name={items.name} id={items.id}/>) }
    </div>
  )
}

export default Contacts