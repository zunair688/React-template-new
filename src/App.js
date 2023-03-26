import logo from './logo.svg';
import './App.css';
import Greetings from "./Components/Body/Greetings";

function App() {
  return (
      <div className="App">

        <Greetings username={"Zunair"}password={"Zunair123"}/>
        <Greetings username={"Ali"}/>
        <Greetings username={"parkash"}/>
        <Greetings username={"hammad"}/>
        <Greetings username={"uzair"}/>
      </div>
  );
}
export default App;
