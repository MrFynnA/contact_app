

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
  const {register,handleSubmit,reset}=useForm()
  return (
    <>
    {createPortal(<Backdrop onClick={()=>dispatch(modalActions.closeContactModal())}/>,document.getElementById('backdrop'))}
   <div id='modal'>
    {createPortal( <div className='contact_form'>
      <h3 className='form_title'>Edit Contact</h3>
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
            <input {...register('name')} type='text' placeholder='enter name' defaultValue={''}></input>
          </div>
          <div className='form_field'>
          <label> Phone number</label>
            <input {...register('number')} type='number' placeholder='enter mobile #' defaultValue={''}></input>
          </div>
          <div className='form_field'>
          <label>Email</label>
            <input {...register('email')} type='email' placeholder='enter email' defaultValue={''}></input>
          </div>
          <div className='form_actions'>
        <Button type='submit' width='100%'>Save Contact</Button>
          </div>
        </form>
    </div>,document.getElementById('modal'))}
    </div>
    </>
  )
}

export default Newcontact