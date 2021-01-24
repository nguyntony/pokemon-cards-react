import './App.css';
import {FactList, NavBar} from './components'
import {FactProvider} from './contexts/FactContext'

function App() {
  return (
    <div className="App">
      <h1>Pokemon TCG React App</h1>
      <p>This app was supposed to use a cat facts api but it was being annoying.</p>
      <FactProvider>
        <NavBar></NavBar>
        <FactList></FactList>
      </FactProvider>
    </div>
  );
}

export default App;
