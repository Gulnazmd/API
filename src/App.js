import './App.css';
import Users from './containers/Users/Users';
import UserDetails from '../src/components/UserDetails/UserDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path='/user_details' element={<UserDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
