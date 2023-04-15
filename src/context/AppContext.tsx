import { ReactNode, createContext, useState } from 'react';
import { IUsers } from '../interfaces/IUser';

export interface AppContextValue {
  user: IUsers[] | undefined;
  setUser:
    | React.Dispatch<React.SetStateAction<IUsers[] | undefined>>
    | undefined;
}

export const AppContext = createContext<AppContextValue>({
  user: undefined,
  setUser: undefined,
});

export interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<IUsers[] | undefined>(undefined);
  const dataContext = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={dataContext}>{children}</AppContext.Provider>
  );
}
