import { useState } from 'react'
import CvForm from './components/CvForm'
import EditSection from './components/EditSection'
import viteLogo from '/vite.svg'


function App() {

  const [ personalDeet, setPersonalDeet ] = useState({fullName: '', email: '', phoneNumber: '', address: ''})
  const [ educationList, setEducationList ] = useState([])
  const [ currentEdu, setCurrentEdu ] = useState({id: '', school: '', degree: '', startDate: '', endDate: '', location: ''})


    function handleSaveForm(e) {
        e.preventDefault()
        const newEduList = [ ...educationList ]
        newEduList.push(currentEdu)

        // console.log(newEduList)
        setEducationList(newEduList)
        setCurrentEdu({id: '', school: '', degree: '', startDate: '', endDate: '', location: ''})
        e.target.reset()
    }

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

        currentEdu={currentEdu}
        setCurrentEdu={setCurrentEdu}
        handleSaveForm={handleSaveForm}
        educationList={educationList}
      />

      <CvForm 
        personalDeet={personalDeet}
        educationList={educationList}
      />
    </div>
  )
}

export default App
