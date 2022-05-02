import './App.css';
import FunctionboxComponent from './component/functionboxComponent';
import MyClassComponent from "./component/MyClassComponent"
function App() {

  return (
    <div className="App">
   <h1>Styling using Functional and Class Component</h1>
   <div className='show'>
   <FunctionboxComponent  />
   <MyClassComponent/>
   </div>
   
    </div>
  );
}

export default App;
