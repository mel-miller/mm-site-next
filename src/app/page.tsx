'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { MainContent } from '@/components/MainContent/MainContent';

export const metadata = {
  title: 'Mel title here',
};

export default function Page() {
  const pathname = usePathname();

  return (
    <MainContent
      containerWidth='standard'
      pageTitle={metadata.title}
      showBreadcrumb={true}
    >
      <p>Content here</p>
    </MainContent>
  );
}
