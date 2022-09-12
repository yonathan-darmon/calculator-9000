import './App.css';
import TheTitle from './Component/TheTitle';
import BeautifullScreen from './Component/BeautifulScreen';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TheTitle/>
      </header>
      <main>
        <BeautifullScreen/>
      </main>
    </div>
  );
}

export default App;
