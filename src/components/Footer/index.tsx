import { useQueryClient } from "react-query";

export function Footer() {
  const queryClient = useQueryClient();

  return (
    <div
      className='flex flex-col items-center justify-end
      w-screen h-72 absolute bottom-0 bg-zinc-100'>
      <div>
        <button
          type='button'
          onClick={() => queryClient.invalidateQueries('user-list')}
          className='bg-lime-500'>
          Próximo Usuário
        </button>
      </div>
    </div>
  );
}
