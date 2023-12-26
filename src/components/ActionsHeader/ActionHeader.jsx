import React from 'react'
import Button from '../../ui_components/Button/Button'

const ActionHeader = () => {
  return (
    <div className='action_container'>
    <div className='action_header'>
        <form className='search_form'>
        <input type='text' placeholder='search contact...'></input>
        <Button className='search_form_btn'>search</Button>
        </form>
        <div>
        <Button>Add Contact</Button>
        </div>
    </div>
    <hr/>
    </div>
  )
}

export default ActionHeader