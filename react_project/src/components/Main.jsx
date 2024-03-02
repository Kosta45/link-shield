

const Main = () => {
    return (
        <>
        <div className="d-flex justify-content-center mt-5">
             <div className="d-flex flex-column btn-group-vertical rounded main-btns border border-3 border-white"> 
                 <a href="/create" className="btn btn-primary btn-lg border-0">Create note</a>
                 <a href="/note" className="btn btn-primary btn-lg border-0">See note</a>
              </div>
        </div>

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
     </>
    )
}

export default Main;