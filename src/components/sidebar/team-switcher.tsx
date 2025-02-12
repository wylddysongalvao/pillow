'use client';

import { SidebarMenuButton } from '@/components/ui/sidebar';
import { Cat } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function TeamSwitcher() {
  const t = useTranslations('Sidebar');

  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <Cat className="size-4" />
      </div>

      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{t('title')}</span>
        <span className="truncate text-xs">{t('role')}</span>
      </div>
    </SidebarMenuButton>
  );
}
