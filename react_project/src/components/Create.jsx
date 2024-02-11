import React, {useState, useRef} from 'react';
import env from '../env.json';


const Create = () => {

    //states
    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    //refs
    const noteRef = useRef();

    //functions
    const createNewNote = () => {
        setFormClass('');
        setLineClass('hide');
    }

    const sendData = (obj) => {
        setFormClass('hide');
        setLineClass('')
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if(response.result) {
                setUrl(env.url+'/'+response.url)
            }
        })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = noteRef.current.value;
        note = note.trim();
        console.log(note)
        if (note === '') {
            alert('Заполните поля');
            return false;
        }
        sendData({"note" : note});
    }

    return (
    <div>
        <div>
            <form action="" onSubmit={loadDataFromForm} className={formClass}>
                <label htmlFor="">Введите заметку</label>
                <textarea name="" id="note" defaultValue="Test" ref={noteRef}></textarea>
                <button type='submit'>Создать</button>
            </form>
        </div>
        <div className={lineClass}>
            <div>{url}</div>
            <div>
                <button onClick={createNewNote}>Созать новую заметку
                </button>
            </div>
        </div>
    </div>
    )
}

export default Create;