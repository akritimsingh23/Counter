import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  function increment()
  {
    setCounter(counter+1)
  }
  return (
  <>
  <button onClick={increment}>Increment</button>
  {counter}
  </>
  );
}

export default App;
