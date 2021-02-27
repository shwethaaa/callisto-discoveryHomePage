import './App.css';
import Home from "./components/pages/Home/Home";
import constants from './constants/Constants.json';

function App() {
  return (
    <div className="container">
      <Home data={constants} />
    </div>
  );
}

export default App;

