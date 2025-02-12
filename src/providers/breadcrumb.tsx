'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

export interface BreadcrumbEntry {
  title: string;
  link?: string;
}

interface BreadcrumbContextType {
  breadcrumb: BreadcrumbEntry[];
  setBreadcrumb: (items: BreadcrumbEntry[]) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbEntry[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = (items?: BreadcrumbEntry[]): BreadcrumbContextType => {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }

  if (items) {
    context.setBreadcrumb(items);
  }

  return context;
};
