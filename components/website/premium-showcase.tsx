'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Code, Copy, ExternalLink } from 'lucide-react';
import { Skeleton } from '@/components/website/ui/skeleton';

interface PremiumShowcaseProps {
  title: string;
  description: string;
  component: React.ComponentType;
  code: string;
  category: string;
  isNew?: boolean;
  isPro?: boolean;
}

export const PremiumComponentShowcase: React.FC<PremiumShowcaseProps> = ({
  title,
  description,
  component: Component,
  code,
  category,
  isNew = false,
  isPro = false,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className='border rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/30'>
        <div className='p-6 border-b bg-background/80 backdrop-blur-sm'>
          <Skeleton className='h-6 w-48 mb-2' />
          <Skeleton className='h-4 w-72' />
        </div>
        <Skeleton className='h-64 rounded-none' />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='group border rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-300'
    >
      {/* Header */}
      <div className='p-6 border-b bg-background/80 backdrop-blur-sm'>
        <div className='flex items-start justify-between'>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <h3 className='text-xl font-semibold'>{title}</h3>
              {isNew && (
                <span className='px-2 py-1 text-xs bg-green-500 text-white rounded-full'>
                  New
                </span>
              )}
              {isPro && (
                <span className='px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'>
                  Pro
                </span>
              )}
            </div>
            <p className='text-muted-foreground text-sm'>{description}</p>
            <span className='inline-block px-2 py-1 text-xs bg-muted rounded-md'>
              {category}
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <button
              onClick={() => setActiveTab('preview')}
              className={`p-2 rounded-lg transition-colors ${
                activeTab === 'preview'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              <Eye className='w-4 h-4' />
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`p-2 rounded-lg transition-colors ${
                activeTab === 'code'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              <Code className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='relative'>
        <AnimatePresence mode='wait'>
          {activeTab === 'preview' ? (
            <motion.div
              key='preview'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='p-8 min-h-[300px] bg-gradient-to-br from-muted/20 to-background flex items-center justify-center'
            >
              <Component />
            </motion.div>
          ) : (
            <motion.div
              key='code'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='relative'
            >
              <pre className='p-6 text-sm overflow-x-auto bg-gray-900 text-gray-100 min-h-[300px]'>
                <code>{code}</code>
              </pre>
              <button
                onClick={handleCopy}
                className='absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'
              >
                {copied ? (
                  <span className='text-xs text-green-400'>Copied!</span>
                ) : (
                  <Copy className='w-4 h-4 text-gray-300' />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium overlay effect */}
        <div className='absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent' />
        </div>
      </div>

      {/* Footer */}
      <div className='p-4 border-t bg-background/50 backdrop-blur-sm flex justify-between items-center'>
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <span>Premium Component</span>
        </div>
        <button className='flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors'>
          View Details
          <ExternalLink className='w-3 h-3' />
        </button>
      </div>
    </motion.div>
  );
};
