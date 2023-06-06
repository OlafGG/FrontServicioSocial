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
import NavbarMenu from './components/pure/navbar.menu';
import CalendarioClass from './pages/class/calendario.class';
import EditInfoClass from './pages/class/edit.info.class';
import ClassForm from './components/pure/form/class.form';
import ClassAddInfoEdit from './pages/class/class.add.info.edit';
import RasgosEditInfo from './pages/class/rasgos.edit.info';
import TableStudents from './components/pure/table.students';





function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route  element={<NavbarMenu></NavbarMenu>}>
        <Route index element={<CardClassShow></CardClassShow>}></Route>
        <Route path='/login' element={<Login></Login>}/>
        {/*<Route path='/home' index element={<HomePage/>}></Route>*/}
        <Route path='/addClass' element={<ClassForm></ClassForm>}></Route>
        <Route element={<AddEvidens></AddEvidens>}></Route>
        <Route path='/calendario' element={<CalendarioClass></CalendarioClass>}></Route>
        <Route path='/color' element={<ConfigAppColor></ConfigAppColor>}></Route>
        <Route path='/reviciones' element={<TableRevisionsShow></TableRevisionsShow>}></Route>
        </Route>
        <Route path='/classEditInfo' element={<ClassAddInfoEdit></ClassAddInfoEdit>}>
          <Route path='/classEditInfo/tableAlumns' element={<TableStudents></TableStudents>}></Route>
          <Route path='/classEditInfo/evidencias' element={<AddEvidens></AddEvidens>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  /*<div className="App"></div>*/
  );
}

export default App;
