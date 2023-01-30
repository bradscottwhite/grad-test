//import bg from './beans-grad.jpg';

const App = () => {
  return (
    <div>
      {/*<div className='fixed w-screen h-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100' />*/}
      <div className='fixed w-screen h-full bg-gradient-to-br from-lime-200 via-slate-100 to-teal-300' />
      {/*<img src={bg} className='absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]' alt='background'/>*/}
      <div className='relative flex justify-center items-center w-screen h-screen'>
        <h1 className='font-extrabold text-5xl text-slate-800 drop-shadow-lg shadow-slate-500/50'>Check out this cool blur background gradient!!!</h1>
      </div>
    </div>
  );
};

export default App;
