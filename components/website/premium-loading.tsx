import React from 'react';
import { Skeleton } from '@/components/website/ui/skeleton';

const PremiumLoading = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-muted/30 to-background'>
      {/* Header Skeleton */}
      <div className='border-b bg-background/80 backdrop-blur-xl'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <Skeleton className='h-8 w-32' />
            <div className='hidden md:flex space-x-8'>
              <Skeleton className='h-4 w-20' />
              <Skeleton className='h-4 w-24' />
              <Skeleton className='h-4 w-16' />
            </div>
            <div className='flex items-center space-x-4'>
              <Skeleton className='h-8 w-8 rounded-full' />
              <Skeleton className='h-8 w-20' />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className='container mx-auto px-4 py-24'>
        <div className='text-center space-y-8'>
          <div className='space-y-4'>
            <Skeleton className='h-16 w-3/4 mx-auto' />
            <Skeleton className='h-16 w-2/3 mx-auto' />
          </div>
          <Skeleton className='h-6 w-1/2 mx-auto' />
          <div className='flex justify-center space-x-4'>
            <Skeleton className='h-12 w-32 rounded-full' />
            <Skeleton className='h-12 w-28 rounded-full' />
          </div>
        </div>
      </div>

      {/* Grid Component Skeleton */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className='space-y-4'>
              <Skeleton className='h-48 w-full rounded-lg' />
              <Skeleton className='h-6 w-3/4' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-2/3' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumLoading;
