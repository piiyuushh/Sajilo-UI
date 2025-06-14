'use client';

import { useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/website/ui/skeleton';

type CodeBlockProps = {
  componentfile: string;
  classname?: string;
};

// Enhanced loading component
const ComponentSkeleton = () => (
  <div className='h-[400px] p-6 space-y-4'>
    <Skeleton className='h-8 w-3/4' />
    <div className='space-y-2'>
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-5/6' />
      <Skeleton className='h-4 w-4/6' />
    </div>
    <div className='flex space-x-2'>
      <Skeleton className='h-10 w-20' />
      <Skeleton className='h-10 w-24' />
    </div>
  </div>
);

export default function ComponentBlocks({
  componentfile,
  classname,
}: CodeBlockProps) {
  const MemoizedComponentPreview = useMemo(() => {
    if (!componentfile) return null;

    return dynamic(() => import(`../../../registry/${componentfile}`), {
      loading: ComponentSkeleton,
      ssr: false, // Disable SSR for complex components
    });
  }, [componentfile]);

  if (!MemoizedComponentPreview) {
    return (
      <div className='h-[400px] flex items-center justify-center text-muted-foreground'>
        Component not found
      </div>
    );
  }

  return (
    <Suspense fallback={<ComponentSkeleton />}>
      <MemoizedComponentPreview />
    </Suspense>
  );
}
