import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export function DarkMode() {
  const { theme, setTheme } = useContext(AppContext);

  function handleTheme() {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
  }

  return theme === 'dark' ? (
    <div
      onClick={handleTheme}
      className='self-end mt-4 mr-10 hidden sm:flex items-center cursor-pointer
              bg-gradient-to-r from-yellow-300 to-yellow-600
              w-14 lg:w-20 h-8 p-1 rounded-full'>
      <div
        className={`
                  flex items-center justify-center
                  bg-white text-yellow-600
                  w-6 h-6 rounded-full
              `}>
        <FontAwesomeIcon icon={faSun} />
      </div>
    </div>
  ) : (
    <div
      onClick={handleTheme}
      className={`
            self-end mt-4 mr-10 hidden sm:flex items-center justify-end cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-20 h-8 p-1 rounded-full
        `}>
      <div
        className={`
                flex items-center justify-center
                bg-black text-yellow-300
                w-6 h-6 rounded-full
            `}>
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </div>
  );
}
