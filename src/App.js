


import {Route,Routes} from "react-router-dom";
import {Calculator} from "./Components/Calculator";
import {HomeScreen} from "./Components/HomeScreen";

function App() {
  return (
     <>
     <Routes>
         <Route path={"/"} element={<HomeScreen/>} />
         <Route path={"/calc"} element={<Calculator/>} />

     </Routes>
     </>
  );
}
export default App;
