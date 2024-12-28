import { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState<string[]>(['0', '0', '0', '0', '0', '0', '0', '0', '0']);
  const [chance, setChance] = useState<'X' | 'O'>('X');
  const [color, setColor] = useState<boolean[]>([false, false, false, false, false, false, false, false, false]);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  function ChangeColor(tile1: number, tile2: number, tile3: number) {
    console.log(tile1, tile2, tile3);
    setColor(c => {
      const newColor = c;
      newColor[tile1] = true;
      newColor[tile2] = true;
      newColor[tile3] = true;
      console.log(newColor);
      return newColor;
    })
  }

  function handleClick(id: number) {
    if (state[id] !== '0') {
      return;
    }


    for (const [tile1, tile2, tile3] of winningCombinations) {
      if ((state[tile1] === chance || id === tile1) && (state[tile2] === chance || id === tile2) && (state[tile3] === chance || id === tile3)) {
        ChangeColor(tile1, tile2, tile3);
        break;
      }
    }

    setState((prev) => {
      const newState = [...prev];
      newState[id] = chance;
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
          <div className={`flex items-center justify-center col-span-1 border-b-2 border-black h-20  ${(color[0] == true) ? "bg-red-500" : ""}`} onClick={() => handleClick(0)}>{(state[0] == '0') ? "" : state[0]}</div>
          <div className={`flex items-center justify-center col-span-1 border-b-2 border-black h-20  ${(color[3] == true) ? "bg-red-500" : ""}`} onClick={() => handleClick(3)}>{(state[3] == '0') ? "" : state[3]}</div>
          <div className={`flex items-center justify-center col-span-1 h-20 ${(color[6]) ? "bg-red-500" : ""}`} onClick={() => handleClick(6)}>{(state[6] == '0') ? "" : state[6]}</div>
        </div>
        <div className='flex flex-col justify-normal border-r-2 border-black'>
          <div className={`flex items-center justify-center col-span-1 border-b-2 border-black h-20  ${(color[1] == true) ? "bg-red-500" : ""}`} onClick={() => handleClick(1)}>{(state[1] == '0') ? "" : state[1]}</div>
          <div className={`flex items-center justify-center col-span-1 border-b-2 border-black h-20  ${(color[4] == true) ? "bg-red-500" : ""}`} onClick={() => handleClick(4)}>{(state[4] == '0') ? "" : state[4]}</div>
          <div className={`flex items-center justify-center col-span-1 h-20 ${(color[7]) ? "bg-red-500" : ""}`} onClick={() => handleClick(7)}>{(state[7] == '0') ? "" : state[7]}</div>
        </div>
        <div className='flex flex-col justify-normal'>
          <div className={`flex items-center justify-center col-span-1 border-b-2 border-black h-20  ${(color[2] == true) ? "bg-red-500" : ""}`} onClick={() => handleClick(2)}>{(state[2] == '0') ? "" : state[2]}</div>
          <div className={`flex items-center justify-center col-span-1 border-b-2 border-black h-20  ${(color[5] == true) ? "bg-red-500" : ""}`} onClick={() => handleClick(5)}>{(state[5] == '0') ? "" : state[5]}</div>
          <div className={`flex items-center justify-center col-span-1 h-20 ${(color[8]) ? "bg-red-500" : ""}`} onClick={() => handleClick(8)}>{(state[8] == '0') ? "" : state[8]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
