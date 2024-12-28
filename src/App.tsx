import { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState<string[]>(['0', '0', '0', '0', '0', '0', '0', '0', '0']);
  const [chance, setChance] = useState<'X' | 'O'>('X');

  function handleClick(id: number) {
    if (state[id] !== '0') {
      return;
    }

    setState((prev) => {
      const newState = [...prev];
      newState[id] = chance;
      console.log(newState);
      return newState;
    });

    setChance(c => {
      return (c == 'X') ? 'O' : 'X';
    })

  }

  return (
    <div className='flex flex-col justify-center min-h-screen'>
      <div className='grid grid-cols-5 text-center'>
        <div className='flex col-start-2 flex-col justify-normal border-r-2 border-black'>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20" onClick={()=>handleClick(0)}>{(state[0] == '0') ? "" : state[0]}</div>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20" onClick={()=>handleClick(3)}>{(state[3] == '0') ? "" : state[3]}</div>
          <div className="flex items-center justify-center col-span-1 h-20" onClick={()=>handleClick(6)}>{(state[6] == '0') ? "" : state[6]}</div>
        </div>
        <div className='flex flex-col justify-normal border-r-2 border-black'>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20" onClick={()=>handleClick(1)}>{(state[1] == '0') ? "" : state[1]}</div>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20" onClick={()=>handleClick(4)}>{(state[4] == '0') ? "" : state[4]}</div>
          <div className="flex items-center justify-center col-span-1 h-20" onClick={()=>handleClick(7)}>{(state[7] == '0') ? "" : state[7]}</div>
        </div>
        <div className='flex flex-col justify-normal'>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20" onClick={()=>handleClick(2)}>{(state[2] == '0') ? "" : state[2]}</div>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20" onClick={()=>handleClick(5)}>{(state[5] == '0') ? "" : state[5]}</div>
          <div className="flex items-center justify-center col-span-1 h-20" onClick={()=>handleClick(8)}>{(state[8] == '0') ? "" : state[8]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
