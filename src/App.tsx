import './App.css';

function App() {
  return (
    <div className='flex flex-col justify-center min-h-screen'>
      <div className='grid grid-cols-5 text-center'>
        <div className='flex col-start-2 flex-col justify-normal border-r-2 border-black'>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20"></div>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20"></div>
          <div className="flex items-center justify-center col-span-1 h-20"></div>
        </div>
        <div className='flex flex-col justify-normal border-r-2 border-black'>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20"></div>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20"></div>
          <div className="flex items-center justify-center col-span-1 h-20"></div>
        </div>
        <div className='flex flex-col justify-normal'>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20"></div>
          <div className="flex items-center justify-center col-span-1 border-b-2 border-black h-20"></div>
          <div className="flex items-center justify-center col-span-1 h-20"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
