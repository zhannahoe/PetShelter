import './App.css';
import Pet from './components/createPet'
import All from './components/allPet'
import Details from './components/onePet'
import Edit from './components/editPet'
import {Router} from '@reach/router'

function App(props) {
  return (
    <div className="App">
      <Router>
        <Pet path = "/create"></Pet>
        <All path = "/all"></All>
        <Details path = "/pets/:petID"></Details>
        <Edit path = "/edit/:petID"></Edit>
      </Router>
    </div>
  );
}

export default App;
