import './App.css';
import TheTitle from './Component/TheTitle';
import BeautifullScreen from './Component/BeautifulScreen';
import Number from './Component/AmazingNumberButton';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TheTitle/>
      </header>
      <main>
        <BeautifullScreen/>
        <Number/>
      </main>
    </div>
  );
}

export default App;
