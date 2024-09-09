import './App.css';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/contacts";
import {Route, Routes, HashRouter} from "react-router-dom";
import Root from "./root/root";



function App() {
    return (
        <div className="App">
        <HashRouter >
            <Routes>
                <Route path="/" element={<Root/>}>
                    <Route index element={<Main/>}/>
                    <Route path='skills' element={<Skills/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                </Route>
            </Routes>
        </HashRouter >
        </div>
    );
}

export default App;

// portfolio/