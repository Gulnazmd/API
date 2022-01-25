import './App.css';
import Users from './containers/Users/Users';
import Button from './components/UI/Button/Button';

function App() {
  return (
    <div className="App">
      <Users />
      <div className='myButtons'>
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
}

export default App;
