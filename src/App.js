import './App.css';
import SolveQuestion from './components/SolveQuestion';

function App() {

  const array = [ {name: 'Ahmad', age: 30},
                {name: 'Yousef', age: 12},
                {name: 'Shatha', age: 14},
                {name: 'Rana', age: 22},
                {name: 'Osama', age: 22},
                {name: 'Ahmad', age: 38} 
              ];

  return (
    <>
      <SolveQuestion array={array} />
    </>
  );
}

export default App;
