import { useState, useEffect } from 'react';

const App = () => {
  const [ darkMode, setDarkMode ] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const switchTheme = () => {
    localStorage.theme = darkMode ? 'light' : 'dark';
    document.documentElement.classList[darkMode ? 'remove' : 'add']('dark');
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className='fixed w-screen h-full bg-gradient-to-br from-lime-200 via-slate-100 to-teal-300 dark:from-lime-500 dark:via-slate-400 dark:to-teal-400 animate-gradient-x' />
      <div className='relative flex justify-center items-center w-screen h-screen'>
        <div className='grid'>
          <h1 className='font-extrabold text-5xl text-slate-800 dark:text-slate-100 drop-shadow-lg shadow-slate-500/50 shadow-slate-400/50'>Check out this cool blur background gradient!!!</h1>
          <button
            className='rounded-lg shadow-lg bg-teal-600 hover:bg-teal-700 bg-teal-500 dark:hover:bg-teal-400 py-4 my-6 px-2 mx-2 text-xl text-white dark:text-slate-800'
            onClick={switchTheme}
          >
            {darkMode ? 'Set to Light Mode' : 'Set to Dark Mode'}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
