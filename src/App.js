import {Routes, Route} from 'react-router-dom'
import UserAPICall from './Components/UserAPICall';
import ReposAPICall from './Components/ReposAPICall';
import './Styles/App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/user/:user_id' element={<><UserAPICall/><ReposAPICall/></>}/>
        <Route path='/' element={<h1>INVALID URL</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
