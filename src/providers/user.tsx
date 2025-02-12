'use client';

import { User } from 'next-auth';
import React, { createContext, ReactNode, useContext } from 'react';

interface UserContextType {
  user: User | null;
}

interface UserProviderProps {
  children: ReactNode;
  user: User | null;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children, user }) => {
  const value: UserContextType = { user };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
