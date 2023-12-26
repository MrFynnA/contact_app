import Contacts from './components/Contact/contactlist'
import Newcontact from './components/Newcontact/NewcontactForm'
import ContactIcon from './assets/icons/contact_icon'
import ActionHeader from './components/ActionsHeader/ActionHeader'
import { useSelector } from 'react-redux'
import ContactDetail from './components/contactDetail/contactDetailModal'
import DeletPromptModal from './components/DeletPrompt/DeletePromptModal'

function App() {
  const contactFormActive=useSelector(state=>state.modal.contactModalActive)
  const contactDetailActive=useSelector(state=>state.modal.contactDetailModalActive)
  const deletModalActive=useSelector(state=>state.modal.deletModalActive)


  return (
    <>                        
<div className='main'>
  <header><ContactIcon/><h4>CONTACTS</h4></header>
  <ActionHeader/>
  <Contacts/>
  {contactFormActive && <Newcontact/>}
  {contactDetailActive&& <ContactDetail/>}
  {deletModalActive && <DeletPromptModal/>}
</div>
            </>
  )
}

export default App
