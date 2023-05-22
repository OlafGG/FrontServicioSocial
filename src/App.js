import './App.css';
import CardClass from './components/pure/card.class';
import ClassForm from './components/pure/form/class.form';
import Login from './login/login';
import ClassAddInfoEdit from './pages/class/class.add.info.edit';
import RasgosEditInfo from './pages/class/rasgos.edit.info';
import HomePage from './pages/home/HomePage';




function App() {
  return (
    <div className="App">
      {/*<Login></Login>*/}
      {/*<HomePage></HomePage>*/}
      <ClassAddInfoEdit></ClassAddInfoEdit>
      {/*<RasgosEditInfo></RasgosEditInfo>*/}

    </div>
  );
}

export default App;
