import React from 'react'
import Button from '../../ui_components/Button/Button'
import AddContactIcon from '../../assets/icons/addContact_icon'

const ActionHeader = () => {
  return (
    <div className='action_container'>
    <div className='action_header'>
        <form className='search_form'>
        <input type='text' placeholder='search contact...'></input>
        <Button className='search_form_btn'>search</Button>
        </form>
        <Button className='action_header_btn'><AddContactIcon/>Add Contact</Button>
    </div>
    <hr/>
    </div>
  )
}

export default ActionHeader