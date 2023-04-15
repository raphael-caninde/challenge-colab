import { Carousel } from '../Carousel';

export function Footer() {
  return (
    <footer
      className='flex flex-col items-center flex-1 w-full h-64
     bg-zinc-100 dark:bg-neutral-800 dark:text-white'>
      <h1 className='mt-3 text-lg font-medium'>Perfis recomendados</h1>
      <Carousel />
    </footer>
  );
}
