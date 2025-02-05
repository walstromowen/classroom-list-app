import { Header } from "./components/Header/Header"
import { StudentList } from "./components/StudentList/StudentList"
import profileImage from './assets/profile-icon.svg'

import {useState, useEffect} from 'react'

function App() {

  const [students, setStudents] = useState(
    [{name: 'Bob', grade: 10, age: 13, imageSrc: profileImage}]//default value (optional)
  )

  function handleAddStudent(newStudentName){
    const studentListCopy = [...students, {name: newStudentName, grade: 0, age:1, imageSrc: profileImage}]//create copy of curent list of students and append a new student based off name
    setStudents(studentListCopy)//can directly edit stateful variable must overwrite with setter function
    handleSaveData(studentListCopy)
  }
  function handleEditStudentName(index, newStudentName){
    console.log(newStudentName)
    let studentListCopy = [...students]
    studentListCopy.forEach((student, studentIndex)=>{
      if(index == studentIndex) student.name = newStudentName
    })
    setStudents(studentListCopy)
    handleSaveData(studentListCopy)
  }
  function handleDeleteStudent(index){
    let studentListCopy = students.filter((student, studentIndex)=>{
      return studentIndex !== index
    })
    setStudents(studentListCopy)
    handleSaveData(studentListCopy)
  }
  function handleSaveData(currentStudents){
    localStorage.setItem('classroom-list-app', JSON.stringify({students: currentStudents}))
  }

//  const students = [
//   {firstname: 'Bob', lastname: 'Bobson', age: 13, imageSrc: profileImage},
//   {firstname: 'Joe', lastname: 'Joeson', age: 14, imageSrc: profileImage},
//   {firstname: 'Tom', lastname: 'Tomson', age: 15, imageSrc: profileImage},
//   {firstname: 'Jane', lastname: 'Janeson', age: 16, imageSrc: profileImage},
//   {firstname: 'Kevin', lastname: 'Kevinson', age: 17, imageSrc: profileImage},
//   {firstname: 'Donald', lastname: 'Donaldson', age: 18, imageSrc: profileImage},
//   {firstname: 'Donald', lastname: 'Donaldson', age: 18, imageSrc: profileImage},
//   {firstname: 'Bob', lastname: 'Bobson', age: 13, imageSrc: profileImage},
//   {firstname: 'Joe', lastname: 'Joeson', age: 14, imageSrc: profileImage},
//   {firstname: 'Bob', lastname: 'Bobson', age: 13, imageSrc: profileImage},
//   {firstname: 'Joe', lastname: 'Joeson', age: 14, imageSrc: profileImage},
//   {firstname: 'Tom', lastname: 'Tomson', age: 15, imageSrc: profileImage},
//   {firstname: 'Jane', lastname: 'Janeson', age: 16, imageSrc: profileImage},
//   {firstname: 'Kevin', lastname: 'Kevinson', age: 17, imageSrc: profileImage},
//   {firstname: 'Donald', lastname: 'Donaldson', age: 18, imageSrc: profileImage},
//   {firstname: 'Donald', lastname: 'Donaldson', age: 18, imageSrc: profileImage},
//   {firstname: 'Bob', lastname: 'Bobson', age: 13, imageSrc: profileImage},
//   {firstname: 'Joe', lastname: 'Joeson', age: 14, imageSrc: profileImage},
  
//  ]

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('classroom-list-app')) {return}
    let db = []
    db = JSON.parse(localStorage.getItem('classroom-list-app'))
    setStudents(db.students)
  }, [])

  return (
    <div className='app'>
    <Header/>
    <StudentList students = {students} handleAddStudent = {handleAddStudent} handleDeleteStudent ={handleDeleteStudent}  handleEditStudentName={handleEditStudentName}/>
    
    </div>
  )
}

export default App
