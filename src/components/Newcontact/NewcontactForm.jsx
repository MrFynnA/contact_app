

import React from 'react'
import Button from '../../ui_components/Button/Button'
import { Backdrop } from '../../ui_components/Backdrop/Backdrop'
import {createPortal} from 'react-dom'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../store/slices/modalSlice'
import { useForm } from 'react-hook-form'
import { contactActions } from '../../store/slices/contactSlice'

const Newcontact = () => {
  const dispatch=useDispatch()
  const {register,handleSubmit,reset,formState}=useForm()
  const{errors}=formState
  return (
    <>
    {createPortal(<Backdrop onClick={()=>dispatch(modalActions.closeContactModal())}/>,document.getElementById('backdrop'))}
   <div id='modal'>
    {createPortal( <div className='contact_form'>
      <h3 className='form_title'>New Contact</h3>
      <div className='close_btn' onClick={()=>dispatch(modalActions.closeContactModal())}>⨉</div>
        <form className='form' onSubmit={handleSubmit((data)=>{
                       const contactDetails={
                        id:Math.random(),
                        name:data.name,
                        phone: data.number,
                        email:data.email
                       }
                       dispatch(contactActions.addContact(contactDetails))
                       const addRequest=async()=>{
                        try{

                          const url='http://localhost:8080/contacts'
                          const res= await fetch(url,{
                           method:'POST',
                           body:JSON.stringify(contactDetails),
                           headers:{'content-type':'application/json'}
  
                          })
                          
                          if(!res.ok){
                               throw new Error('couldnt send data to resource')
                          }
                        }catch(error){
                            console.log(error.message)
                        }
                      }
                      addRequest()
                       reset()
                       dispatch(modalActions.closeContactModal())
        })}>
          <div className='form_field'>
          <label>Name</label>
            <input {...register('name',{required:true,minLength:{
              value:3,
              message:'Please enter a valid name'
            }})} type='text' placeholder='enter name'></input>
            {errors && errors.name && <p className='error_title'>{errors.name.message}</p>}
          </div>
          <div className='form_field'>
          <label> Phone number</label>
            <input {...register('number',{required:true,minLength:{
              value:10,
              message:'Please enter a valid number'
            }})} type='number' placeholder='enter mobile #'></input>
            {errors && errors.number && <p className='error_title'>{errors.number.message}</p>}
          </div>
          <div className='form_field'>
          <label>Email</label>
            <input {...register('email',{required:true,pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Please enter a valid email',
    }})} type='email' placeholder='enter email'></input>
            {errors && errors.email && <p className='error_title'>{errors.email.message}</p>}
          </div>
          <div className='form_actions'>
        <Button type='submit' width='100%'>Add Contact</Button>
          </div>
        </form>
    </div>,document.getElementById('modal'))}
    </div>
    </>
  )
}

export default Newcontact