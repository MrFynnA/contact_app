import React, { useEffect,useState } from 'react'
import Button from '../../ui_components/Button/Button'
import PersonIcon from '../../assets/icons/person_icon'
import TrashIcon from '../../assets/icons/trash_icon'
import { useDispatch,useSelector } from 'react-redux'
import { contactActions } from '../../store/slices/contactSlice'
import { modalActions } from '../../store/slices/modalSlice'
import { useCallback } from 'react'
import DeletPromptModal from '../DeletPrompt/DeletePromptModal'


const ContactItem = (props) => {
  const dispatch=useDispatch()
  const deletModalActive=useSelector(state=>state.modal.deletModalActive)
  const [error,setError]=useState()
  const{name,id,contactDetails}=props
  const newName=name.split(' ')
    const finalName=`${newName[0]} ${newName[1] ? newName[1]:""}`
    const contactDetail={
      ...contactDetails
    }
  
    const deleteRequest=useCallback(async(contactId)=>{
      try {
        const url=`http://localhost:8080/contacts/${contactId}`
        const res=await fetch(url, {
          method:"DELETE"
        })
        if(!res.ok){
          throw new Error ('could not delete contact from resource')
        }
      } catch (error) {
        setError(error.message)
      }finally{
          dispatch(modalActions.closeDeleteModal())
      }
    },[dispatch])




    const deletAction=()=>{
            dispatch(contactActions.deleteContact(id))
            deleteRequest(id)
            dispatch(modalActions.closeDeleteModal())
    }
  return (
    <>
     {deletModalActive && <DeletPromptModal onClick={deletAction}/>}
    <div className='contact_item'>
     <div className='contact'><PersonIcon/><h4>{finalName}</h4><div className='contact_actions'><Button onClick={()=>{
      dispatch(contactActions.setContactDetail(contactDetail))
      dispatch(modalActions.setDetailModalActive())
      }}>view details</Button><Button className='contact_actions_trash' onClick={()=>dispatch(modalActions.setDeleteModalActive())}><TrashIcon pathClassname={'trash_icon_path'}/></Button></div></div>
    </div>
    </>
  )
}

export default ContactItem