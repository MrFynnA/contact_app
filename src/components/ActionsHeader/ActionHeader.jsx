import React from 'react'
import Button from '../../ui_components/Button/Button'

const ActionHeader = () => {
  return (
    <div className='action_header'>
        <form className='search_form'>
        <label>Search</label>
        <input type='text'></input>
        <Button>search</Button>
        </form>
        <div>
        <Button>Add Contact</Button>
        </div>
    </div>
  )
}

export default ActionHeader