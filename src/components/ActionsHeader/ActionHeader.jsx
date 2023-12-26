import React from 'react'
import Button from '../../ui_components/Button/Button'
import AddContactIcon from '../../assets/icons/addContact_icon'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../store/slices/modalSlice'
import SearchIcon from '../../assets/icons/search_icon'
import { useForm } from 'react-hook-form'


const ActionHeader = () => {
  const dispatch=useDispatch()
  const{register,handleSubmit}=useForm()
  return (
    <div className='action_container'>
    <div className='action_header'>
        <form className='search_form' onSubmit={handleSubmit((data)=>{
                  dispatch()
        })}>
        <input type='text' {...register('searchTerm',{required:true,maxLength:{
            value:20,
        }})} placeholder='search contact...'></input>
        <Button className='search_form_btn'><span className='search_form_btn_icon'><SearchIcon/></span><span className='search_form_btn_text'>search</span></Button>
        </form>
        <Button className='action_header_btn' onClick={()=>dispatch(modalActions.setContactModalActive())}><AddContactIcon/><span className='action_header_btn_text'>Add Contact</span></Button>
    </div>
    <hr/>
    </div>
  )
}

export default ActionHeader