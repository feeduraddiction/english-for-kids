import Header from "./components/Header";
import Categories from "./components/Categories";
import Pages from "./pages";

import categories from '@assets/Categories';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header categories={categories}/>
                <Categories categories={categories}/>
                <Pages categories={categories}/>
        </div>
    );
}

export default App;
