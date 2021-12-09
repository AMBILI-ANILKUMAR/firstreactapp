import logo from './logo.svg';
import './App.css';
import Test from './test';
import Reg from './Reg'
function App() {
  return (
  <div className="App">
      <div>
        <table width="100%" >
          <th><h1>Login Here</h1>
          <hr/>
          </th>
          <th><h1>Register Here</h1>
          <hr/>
          </th>
          <tr>
            <td width="50%"> <Test /></td>
            <td width="50%"> <Reg /></td>
          </tr>
          </table>
       </div>
     
    </div>
    
  );
  
  
}

export default App;
