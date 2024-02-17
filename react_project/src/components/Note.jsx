import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


const Note = () => {

    let {noteURL} = useParams();

    //refs
    const urlInput = useRef();

    //states
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');



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
                    setErrorClass('hide');
                } else if (!response.result) {
                    setLineClass('hide');
                    setFormClass('hide');
                    setErrorClass('');
                }
            })
        }
        else {
            setLineClass('hide');
            setErrorClass('hide');
            setFormClass('');
        }
    }, []);

    const getNote = (event) => {
        event.preventDefault();
        let url = urlInput.current.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url+'/'+url;

    }

    const searchNote = () => {
        window.location.href = env.url;
    }

    return (
        <div>
        <div className={lineClass}>
            <h4>Note:</h4>
            <div>{noteText}</div>
            <div>
                <button onClick={searchNote}>Смотреть ещё один note</button>
            </div>
        </div>
        <div className={errorClass}>
            <p>Произошла ошибка. Такой note не найден.</p>
        </div>
        <div className={formClass}>
            <form action="" onSubmit={getNote}>
              <label htmlFor="url">Введите hash заметки</label>
              <input type="text" name="url" id="url" className="form-control" ref={urlInput}/>
              <button type="submit" className="btn btn-primary">Искать Note</button>
            </form>
        </div>
        </div>
    )
}

export default Note;