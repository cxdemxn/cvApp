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
      
      if (isFormEdit) {
        updateEduList()
      } else {
        appendEduList()
      }

      e.target.reset()
      resetForm()
      
    }
    
    function updateEduList(currentEduFromInput) {
      const updatedEduList = educationList.map(education => {
        if (currentEduFromInput && (education.id === currentEduFromInput.id)) // checks if value comes directly from input
          education = { ...currentEduFromInput }
        else if (education.id === currentEdu.id) // defaults to form's last state when save is clicked
          education = { ...currentEdu }
        

        return education
      })

      // console.log(updatedEduList)

      setEducationList(updatedEduList)
    }

    function appendEduList() {
      const updatedEduList = [ ...educationList ]
      updatedEduList.push(currentEdu)

      setEducationList(updatedEduList)
    }

    function resetForm() {
      setCurrentEdu({id: '', school: '', degree: '', startDate: '', endDate: '', location: ''})
      setIsFormEdit(!isFormEdit)
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
        updateEduList={updateEduList}

        isFormActive={isFormActive}
        setIsFormActive={setIsFormActive}

        resetForm={resetForm}
      />

      <CvForm 
        personalDeet={personalDeet}
        educationList={educationList}
      />
    </div>
  )
}

export default App
