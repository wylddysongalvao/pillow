'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { BreadcrumbEntry, useBreadcrumb } from '@/providers/breadcrumb';
import Link from 'next/link';
import { useEffect } from 'react';

const Item = ({ item, separator }: { item: BreadcrumbEntry; separator?: boolean }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {item.link ? (
            <BreadcrumbLink asChild>
              <Link href={item.link} prefetch={false}>
                {item.title}
              </Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{item.title}</BreadcrumbPage>
          )}
        </BreadcrumbItem>

        {separator && <BreadcrumbSeparator className="hidden md:block" />}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export function BreadcrumbHost() {
  const { breadcrumb: crumbs } = useBreadcrumb();

  return crumbs.length > 0 ? (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((item, index) => (
          <Item
            key={`bc-item-${index}`}
            item={item}
            separator={index < crumbs.length - 1}
          />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  ) : null;
}

export const PageBreadcrumb = ({ items }: { items: BreadcrumbEntry[] }) => {
  const { setBreadcrumb } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumb(items);
    // eslint-disable-next-line
  }, []);

  return null;
};
