import React, {useState, useRef} from 'react';
import env from '../env.json';


const Create = () => {

    //states
    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('d-flex flex-column');

    //refs
    const noteRef = useRef();

    //functions
    const showCreateNewNote = () => {
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
            if(response.result) {
                setUrl(env.url+'/'+response.url)
            }
        })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = noteRef.current.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля');
            return false;
        }
        sendData({"note" : note});
    }

    return (
    <div className='container create bg-white d-flex align-items-center rounded mt-5'>
        <div className='d-flex flex-column note'>
          <div className=''>
            <form action="" onSubmit={loadDataFromForm} className={formClass}>
                <div className='d-flex flex-column'>
                <label htmlFor='note' className="form-label">Введите заметку</label>
                <textarea name="" id="note" defaultValue="" ref={noteRef} className="note form-control" rows="3"></textarea>
                <button type='submit' className='btn btn-primary mt-4'>Создать</button>
                </div>
            </form>
          </div>
           <div className={`${lineClass}`}>
            <div className=''>
              <div className='mb-4'>{url}</div>
              <div>
                <button onClick={showCreateNewNote} className='btn btn-primary'>Созать новую заметку</button>
              </div>
            </div>
           </div>
        </div>
    </div>
    )
}

export default Create;