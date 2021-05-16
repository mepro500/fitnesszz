import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> hello implify  2222
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button><h3>test</h3> </button>
      </header>
    </div>
  );
}

export default  (App);
