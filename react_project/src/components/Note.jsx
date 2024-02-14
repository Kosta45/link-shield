import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


const Note = () => {
    let {noteURL} = useParams();
    const [noteText, setNoteText] = useState('');


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
                    setNoteText(response.note) 
                }
            })
        }
    }, []);

    return (
        <div>
        <div>
            <h4>Note:</h4>
            <div>{noteText}</div>
        </div>
        </div>
    )
}

export default Note;