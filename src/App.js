import './App.css';
import TheTitle from './Component/TheTitle';
import Calculator from './Component/Calculator';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TheTitle/>
      </header>
      <main>
        <Calculator/>
      </main>
    </div>
  );
}

export default App;
