import { StudentCard } from "../StudentCard/StudentCard";
import { InputCard } from "../InputCard/InputCard";
import './StudentList.css'

export function StudentList(props){
    const {students, handleAddStudent, handleEditStudentName, handleDeleteStudent} = props;
    
    return(
        <div className='student-list'>
            {students.map((student, studentIndex) => {
                return(
                    <StudentCard 
                        student = {student} 
                        handleDeleteStudent = {handleDeleteStudent}
                        handleEditStudentName = { handleEditStudentName}
                        studentIndex = {studentIndex} key={studentIndex}
                    />
                )
            })}
             <InputCard handleAddStudent = {handleAddStudent}/>
        </div>
    )
}