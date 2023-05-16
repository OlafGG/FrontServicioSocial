import './App.css';
import CardClass from './components/pure/card.class';
import ClassForm from './components/pure/form/class.form';
import Login from './login/login';
import ClassAddInfoEdit from './pages/class/class.add.info.edit';
import HomePage from './pages/home/HomePage';




function App() {
  return (
    <div className="App">
      {/*<Login></Login>*/}
      {/*<HomePage></HomePage>*/}
      <ClassAddInfoEdit></ClassAddInfoEdit>
    </div>
  );
}

export default App;
