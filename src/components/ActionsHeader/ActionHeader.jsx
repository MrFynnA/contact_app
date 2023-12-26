import React, { useEffect } from 'react'
import Button from '../../ui_components/Button/Button'
import AddContactIcon from '../../assets/icons/addContact_icon'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../store/slices/modalSlice'
import SearchIcon from '../../assets/icons/search_icon'
import { useForm } from 'react-hook-form'
import { searchActions } from '../../store/slices/searchSlice'


const ActionHeader = () => {
  const dispatch=useDispatch()
  const{register,handleSubmit,watch}=useForm()
  const searchValue=watch('searchTerm')

  useEffect(()=>{
    dispatch(searchActions.setSearchTerm(searchValue))
  },[searchValue,dispatch])
  return (
    <div className='action_container'>
    <div className='action_header'>
        <form className='search_form' onSubmit={handleSubmit((data)=>{
          console.log(data)
                  dispatch(searchActions.setSearchTerm(data.searchTerm))
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