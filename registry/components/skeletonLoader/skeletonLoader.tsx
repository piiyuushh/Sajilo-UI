import React from 'react';

// Skeleton component
function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-300 ${className}`} />;
}

// SkeletonLoader component
export default function SkeletonLoader() {
  return (
    <div className='space-y-2'>
      <Skeleton className='w-14 h-14 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='w-52 h-6 rounded-md' />
        <Skeleton className='w-52 h-4 rounded-md' />
        <Skeleton className='w-52 h-4 rounded-md' />
      </div>
    </div>
  );
}
