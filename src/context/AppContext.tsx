import { ReactNode, createContext, useState } from 'react';
import { IUsers } from '../interfaces/IUser';

export interface AppContextValue {
  user: IUsers[] | undefined;
  setUser:
    | React.Dispatch<React.SetStateAction<IUsers[] | undefined>>
    | undefined;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextValue>({
  user: undefined,
  setUser: undefined,
  theme: '',
  setTheme: () => undefined,
});

export interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<IUsers[] | undefined>(undefined);
  const [theme, setTheme] = useState('');

  const dataContext = {
    user,
    setUser,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={dataContext}>{children}</AppContext.Provider>
  );
}
