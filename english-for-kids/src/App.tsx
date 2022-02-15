import {Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import Categories from "./components/Categories";

import categories from '@assets/Categories';
import Pages from "./pages";


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
