'use client';

import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/sidebar/nav-main';
import { NavUser } from '@/components/sidebar/nav-user';
import { TeamSwitcher } from '@/components/sidebar/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'history',
          url: '#',
        },
        {
          title: 'starred',
          url: '#',
        },
        {
          title: 'settings',
          url: '#',
        },
      ],
    },
    {
      title: 'models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'genesis',
          url: '#',
        },
        {
          title: 'explorer',
          url: '#',
        },
        {
          title: 'quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'intro',
          url: '#',
        },
        {
          title: 'getStarted',
          url: '#',
        },
        {
          title: 'tutorials',
          url: '#',
        },
        {
          title: 'changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'general',
          url: '#',
        },
        {
          title: 'team',
          url: '#',
        },
        {
          title: 'billing',
          url: '#',
        },
        {
          title: 'limits',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
