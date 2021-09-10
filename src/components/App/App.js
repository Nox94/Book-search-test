import './app.css';
import Search from "../Search/Search.js";
import Books from "../Books/Books.js";

function App() {

/*    const getBooks = () => {
        return fetch()
    }*/

    return (
        <div className="app">
            <h1 className="app__heading outline">Search for books</h1>
            <Search/>
            <Books/>
        </div>
    );
}

export default App;

//Api key
//AIzaSyCtS5qrd9slczMVO32QraTG5lFXDjCg3uI
