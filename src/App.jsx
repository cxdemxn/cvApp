import { useState } from 'react'
import CvForm from './components/CvForm'
import EditSection from './components/EditSection'
import viteLogo from '/vite.svg'


function App() {

  const [ personalDeet, setPersonalDeet ] = useState({fullName: '', email: '', phoneNumber: '', address: ''})

    function handlePersonalDeetChange(id, value) {
        const newPersonalDeet = { ...personalDeet }

        newPersonalDeet[id] = value

        setPersonalDeet(newPersonalDeet)
    }

  return (
    <div className='app'>
      <EditSection 
        personalDeet={personalDeet} 
        handlePersonalDeetChange={handlePersonalDeetChange}
      />

      <CvForm personalDeet={personalDeet}/>
    </div>
  )
}

export default App
