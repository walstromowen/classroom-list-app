import './InputCard.css'

import {useState} from 'react'

export function InputCard(props){
    const {handleAddStudent} = props
    const [nameInput, setNameInput] = useState('');

    return(
        <div className='student-card'>
            <textarea 
                className='student-card-input input-card-input' 
                value={nameInput}
                placeholder={'Enter Name Here...'}
                onChange={(e)=>{setNameInput(e.target.value)}}>
            </textarea>
            <div className='student-card-button-container'>
            <button onClick={()=>{
                    if(nameInput == '') {return}
                    handleAddStudent(nameInput)
                    setNameInput('')
            }}>Add</button>
            </div>
            
        </div>

    )
}