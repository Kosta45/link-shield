import React from 'react';


const About = () => {
    return (
        <div className='d-flex flex-column container bg-white d-flex rounded mt-5'>
        <div className="d-flex flex-column mt-3">
        <p> 
            LinkShield - сервис для обмена заметками. Создайте заметку, отправте ссылку на заметку и ваш друг сможет её посмотреть. После просмотра заметка будет удалена.
        </p>
         <p>Как сделать заметку?</p>
         <ul>
             <li>Пройдите по ссылке</li>
             <li>Вставте текст и нажмите Create</li>
             <li>Отправте сгенерированный адрес другу</li>
         </ul>
         <p>Как прочитать заметку? Перейдите по присланому URL, либо введите вручную в поиске.</p>
         </div>
         </div>
    )
}

export default About;