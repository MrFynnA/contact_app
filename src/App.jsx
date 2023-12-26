import Contacts from './components/contact'
import Newcontact from './components/Newcontact/Newcontact'
function App() {

  return (
    <>                        
<div className='main'>
  <header><h4>CONTACTS</h4></header>
  <Contacts/>
  <Newcontact/>
</div>
            </>
  )
}

export default App
