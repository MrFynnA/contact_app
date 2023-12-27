import React from 'react'
import ContactItem from './contactItem'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { contactActions } from '../../store/slices/contactSlice'
const Contacts = () => {

  const dispatch=useDispatch()
  const contacts=useSelector(state=>state.contactsItems.contacts)
  const searchValue=useSelector(state=>state.search.searchTerm)
  // console.log(searchValue)

   useEffect(()=>{
             const getDataRequest=async()=>{
              try {
                let url='http://localhost:8080/contacts/'
                if(searchValue){
               url+=`?_&q=${searchValue}`
                }
          
                const res= await fetch(url) 
                if(!res.ok){
                  throw new Error('could not retrieve data from resource')
                } 
                const data=await res.json()
                dispatch(contactActions.replaceContacts(data))
              } catch (error) {
                console.log(error.message)
              }
             }

             getDataRequest()
   },[dispatch,searchValue])

  return (
    <div className='contact_list'>
       {contacts.length>0 ? contacts.map(items=><ContactItem key={items.id} name={items.name} id={items.id}/>):<div><h4>No Contacts Available.</h4></div> }
    </div>
  )
}

export default Contacts