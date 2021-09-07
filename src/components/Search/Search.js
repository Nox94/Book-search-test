import './search.css';
export default function Search () {
    return (
        <section className={"search"}>
            <h1 className="search__heading">Search for books</h1>
            <form className="search__form">
                <input type="text" className="search__form-input" minLength={1} autoFocus required/>
            </form>
        </section>
    )
}

//TODO: подумать над логикой отправки формы
//TODO: прописать стили формы поиска
//TODO: прописать компонент фильтрации и внедрить в компонент поиска
