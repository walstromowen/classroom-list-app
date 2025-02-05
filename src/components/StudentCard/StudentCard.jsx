import './StudentCard.css';
import profileImage from '../../assets/profile-icon.svg'



export function StudentCard(props){
    const {student, handleDeleteStudent,  handleEditStudentName, studentIndex} = props
  
    const icon = student ? student.imageSrc: profileImage;
    return(

        <div className='student-card'>
            <div className='student-card-button-container'>
               <button onClick={()=>{handleDeleteStudent(studentIndex)}}>X</button>
            </div>
            <textarea 
                className='student-card-input' 
                value={student.name}
                placeholder={student.name}
                onChange={(e)=>{ handleEditStudentName(studentIndex, e.target.value)}}
            ></textarea>
        </div>
    )
}