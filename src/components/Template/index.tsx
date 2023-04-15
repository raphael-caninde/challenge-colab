import { useQuery } from 'react-query';
import { getUsers } from '../../services/fetchUser';
import { IUsers } from '../../interfaces/IUser';
import { useContext } from 'react';
import { UserCard } from '../UserCard';
import { AppContext, AppContextValue } from '../../context/AppContext';

export function Template() {
  const { data } = useQuery('user-list', () => getUsers());
  const appContext: AppContextValue | undefined = useContext(AppContext);
  const { user } = appContext || [];

  return (
    <>
      {user?.length
        ? user?.map((user: IUsers) => <UserCard user={user} />)
        : data?.results.map((user: IUsers) => <UserCard user={user} />)}
    </>
  );
}
