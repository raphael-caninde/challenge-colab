import { createContext, useEffect, useState } from 'react';
import { IUsers } from '../interfaces/IUser';

export const AppContext = createContext<IUsers | null>(null);

export function AppProvider({ children }: any) {
  const [user, setUser] = useState<IUsers[]>([]);

  const data = {
    user,
    setUser
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
