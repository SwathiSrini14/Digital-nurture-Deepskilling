import './App.css';
import EventExamples from './Components/EventExamples';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>React Event Examples</h1>

      <EventExamples />

      <CurrencyConvertor />
    </div>
  );
}

export default App;