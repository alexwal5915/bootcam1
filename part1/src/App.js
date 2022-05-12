
import './App.css';
import Mensaje from './Mensaje';

const App = () => {
  return (
    <div className="App">
      <Mensaje color= 'red'message='estamos trabajando'/>
      <Mensaje color= '#ccc'message='en un curso'/>
      <Mensaje color= 'blue'message=' de react'/>
    </div>
  );
}

export default App;
