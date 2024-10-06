import { useState } from 'react'
import CvForm from './components/CvForm'
import EditSection from './components/EditSection'
import viteLogo from '/vite.svg'


function App() {

  const [ personalDeet, setPersonalDeet ] = useState({fullName: '', email: '', phoneNumber: '', address: ''})
  const [ educationList, setEducationList ] = useState([])
  const [ currentEdu, setCurrentEdu ] = useState({id: '', school: '', degree: '', startDate: '', endDate: '', location: ''})
  const [ isFormActive, setIsFormActive ] = useState(false)
  const [ selectedEdu, setSelectedEdu ] = useState({})
  const [ isFormEdit, setIsFormEdit ] = useState(false)

    function handleSaveForm(e) {
        e.preventDefault()
        let updatedEduList
        if (isFormEdit) {
          updatedEduList = educationList.map(education => {
            if (education.id === currentEdu.id) {
              education = { ...currentEdu }
            }
            return education
          })

          console.log(updatedEduList)
          // updatedEduList = [ ...educationList ]
        } else {
          updatedEduList = [ ...educationList ]
          updatedEduList.push(currentEdu)

        }

        // console.log(updatedEduList)
        setEducationList(updatedEduList)
        setCurrentEdu({id: '', school: '', degree: '', startDate: '', endDate: '', location: ''})
        e.target.reset()
        setIsFormEdit(false)
        setIsFormActive(!isFormActive)
    }

    function handlePersonalDeetChange(id, value) {
        const newPersonalDeet = { ...personalDeet }

        newPersonalDeet[id] = value

        setPersonalDeet(newPersonalDeet)
    }

    function handleSelectedItem(id) {
        let edu = {} 
        educationList.forEach(education => {
          if (education.id === id)
            edu = education
        })

        setIsFormEdit(true)
        setCurrentEdu(edu)
        setIsFormActive(!isFormActive)
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
        handleSelectedItem={handleSelectedItem}

        isFormActive={isFormActive}
        setIsFormActive={setIsFormActive}


      />

      <CvForm 
        personalDeet={personalDeet}
        educationList={educationList}
      />
    </div>
  )
}

export default App
