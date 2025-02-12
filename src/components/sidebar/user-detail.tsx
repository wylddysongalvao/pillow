'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@/providers/user';

const abbreviate = (name: string) => {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('');
};

export default function UserDetail() {
  const { user } = useUser();

  return user ? (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        {user.image ? <AvatarImage src={user.image} alt={user.name!} /> : null}
        <AvatarFallback className="rounded-lg">{abbreviate(user.name!)}</AvatarFallback>
      </Avatar>

      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{user.name}</span>
        <span className="truncate text-xs">{user.email}</span>
      </div>
    </>
  ) : null;
}
