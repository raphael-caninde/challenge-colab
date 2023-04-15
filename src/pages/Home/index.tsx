import { useQueryClient } from 'react-query';
import { Template } from '../../components/Template';
import { Footer } from '../../components/Footer';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import { DarkMode } from '../../components/DarkMode';

export function Home() {
  const queryClient = useQueryClient();
  const { setUser, theme } = useContext(AppContext);

  return (
    <div
      className={`${theme} flex flex-col items-center
        bg-gradient-to-r from-indigo-500 to-blue-300 w-screen
        h-screen
      `}>
      <DarkMode />
      <Template />
      <div className='mt-5 mb-5'>
        <button
          type='button'
          onClick={() => {
            setUser?.([]);
            queryClient.invalidateQueries('user-list');
          }}
          className='rounded-md text-white p-3 font-medium
           bg-green-500 hover:bg-green-400 transition-colors '>
          Próximo
        </button>
      </div>
      <Footer />
    </div>
  );
}
