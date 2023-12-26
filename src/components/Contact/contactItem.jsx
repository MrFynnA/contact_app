import React from 'react'
import Button from '../../ui_components/Button/Button'
import PersonIcon from '../../assets/icons/person_icon'
import TrashIcon from '../../assets/icons/trash_icon'
import { useDispatch } from 'react-redux'
import { contactActions } from '../../store/slices/contactSlice'

const ContactItem = (props) => {
  const dispatch=useDispatch()
  const{name,id}=props
  const newName=name.split(' ')
    const finalName=`${newName[0]} ${newName[1] ? newName[1]:""}`

    const deleteRequest=async()=>{
      try {
        const url='http://localhost:8080/contacts/'+id
        const res=await fetch(url, {
          method:"DELETE"
        })
        if(!res.ok){
          throw new Error ('could not delete contact from resource')
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  return (
    <div className='contact_item'>
     <div className='contact'><PersonIcon/><h4>{finalName}</h4><div className='contact_actions'><Button>view details</Button><Button className='contact_actions_trash' onClick={deleteRequest}><TrashIcon pathClassname={'trash_icon_path'}/></Button></div></div>
    </div>
  )
}

export default ContactItem