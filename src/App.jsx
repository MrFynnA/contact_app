import Contacts from './components/Contact/contactlist'
import Newcontact from './components/Newcontact/NewcontactForm'
import ContactIcon from './assets/icons/contact_icon'
import ActionHeader from './components/ActionsHeader/ActionHeader'
import { useSelector } from 'react-redux'

function App() {
  const contactFormActive=useSelector(state=>state.modal.contactModalActive)


  return (
    <>                        
<div className='main'>
  <header><ContactIcon/><h4>CONTACTS</h4></header>
  <ActionHeader/>
  <Contacts/>
  {contactFormActive ? <Newcontact/>:""}
</div>
            </>
  )
}

export default App
