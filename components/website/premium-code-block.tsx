import { cn } from '@/lib/utils';

export interface PremiumCodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  className?: string;
}

export const PremiumCodeBlock: React.FC<PremiumCodeBlockProps> = ({
  code,
  language,
  filename,
  showLineNumbers = true,
  highlightLines = [],
  className,
}) => {
  const lines = code.split('\n');

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg border bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-100',
        className
      )}
    >
      {filename && (
        <div className='flex items-center justify-between border-b border-gray-700 bg-gray-800/50 px-4 py-2 text-sm'>
          <span className='text-gray-300'>{filename}</span>
          <span className='text-xs text-gray-500 uppercase'>{language}</span>
        </div>
      )}

      <div className='relative'>
        <pre className='overflow-x-auto p-4 text-sm leading-relaxed'>
          <code className={`language-${language}`}>
            {lines.map((line, index) => (
              <div
                key={index}
                className={cn(
                  'flex',
                  highlightLines.includes(index + 1) &&
                    'bg-blue-500/10 border-l-2 border-blue-400'
                )}
              >
                {showLineNumbers && (
                  <span className='mr-4 select-none text-right text-gray-500 w-8 flex-shrink-0'>
                    {index + 1}
                  </span>
                )}
                <span className='flex-1'>{line || ' '}</span>
              </div>
            ))}
          </code>
        </pre>

        {/* Premium gradient overlay for depth */}
        <div className='absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-gray-900/5' />
      </div>
    </div>
  );
};
