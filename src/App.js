import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/home/HomePage';
/*import CardClass from './components/pure/card.class';
import ClassForm from './components/pure/form/class.form';
import CalendarioClass from './pages/class/calendario.class';
import ClassAddInfoEdit from './pages/class/class.add.info.edit';
import RasgosEditInfo from './pages/class/rasgos.edit.info';
import HomePage from './pages/home/HomePage';*/
import Login from './pages/login/login';
import CardClassShow from './pages/class/card.class.show';
import AddEvidens from './pages/class/add.evidens';
import AddClassCalendary from './pages/class/add.class.calendary';
import ConfigAppColor from './pages/class/config.app.color';
import TableRevisionsShow from './pages/class/table.revisions.show';





function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login></Login>}/>
        <Route path='/' index element={<HomePage></HomePage>}></Route>
        <Route element={<CardClassShow></CardClassShow>}></Route>
        <Route element={<AddEvidens></AddEvidens>}></Route>
        <Route element={<AddClassCalendary></AddClassCalendary>}></Route>
        <Route element={<ConfigAppColor></ConfigAppColor>}></Route>
        <Route element={<TableRevisionsShow></TableRevisionsShow>}></Route>
      </Routes>
    </BrowserRouter>
  /*<div className="App"></div>*/
  );
}

export default App;
