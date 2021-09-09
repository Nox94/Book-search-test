import './search.css';

export default function Search() {
    return (
        <>
            <form className="search__form outline">
                <input type="text" className="search__form-input" minLength={1} autoFocus required/>
            </form>
            <div className="search__wrapper outline">
                <p className={"search__sort-heading"}>Categories</p>
                <select className={"search__select"} id={"categories"}>
                    <option defaultChecked>all</option>
                    <option>art</option>
                    <option>biography</option>
                    <option>computers</option>
                    <option>history</option>
                    <option>medical</option>
                    <option>poetry</option>
                </select>
                <p className={"search__sort-heading"}>Sorting by</p>
                <select className={"search__select"} id={"categories"}>
                    <option defaultChecked>relevance</option>
                    <option>newest</option>
                </select>
            </div>
        </>
    )
}

//TODO: подумать над логикой отправки формы
//TODO: прописать стили формы поиска
