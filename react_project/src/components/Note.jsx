import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


const Note = () => {

    let {noteURL} = useParams();

    //states
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide')



    useEffect(() => {
        if (noteURL !== undefined){
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({"url" : noteURL})
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setNoteText(response.note) ;
                    setLineClass('');
                    setFormClass('hide');
                } else if (!response.result) {
                    setLineClass('hide');
                    setFormClass('hide');
                }
            })
        }
        else {

        }
    }, []);

    return (
        <div>
        <div className={lineClass}>
            <h4>Note:</h4>
            <div>{noteText}</div>
        </div>
        </div>
    )
}

export default Note;