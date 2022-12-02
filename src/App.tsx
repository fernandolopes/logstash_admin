import { useSelector } from 'react-redux';
import './App.css';
import { useApply } from './redux/generalSlice';

function Number() {
  const number = useSelector<any, number>(state => state.number || 0);

  return <b>{number}</b>;
}

function App() {
  const apply = useApply();

  return <>
    <Number /><br />
    <button onClick={() => apply("number", Math.random())}>Randomize</button>
  </>;
}

export default App;
