import React, { useState } from 'react';
import { questionPropsType } from './../Types/quiz_types'
const QuestionCard: React.FC<questionPropsType> = ({ question,
    options,callback }) => {
        let [selectedAns,setSelectedAns]=useState("")
        const handleSelection=(ev:any)=> {
            
            setSelectedAns(ev.target.value)
        }
        return (
        <div className="question-container">
            <div className="question">
                {question}
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}
            className="question-form">
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={opt}>
                                <label  className="radio" >
                                    <input
                                  
                                    required 
                                    checked={selectedAns===opt} onChange={handleSelection} type="radio" name="opt" value={opt}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input type="submit" className="submit" />
            </form>
        </div>
    )
}

export default QuestionCard;