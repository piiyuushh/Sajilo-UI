import React from 'react';

const Footer = () => {
  return (
    <footer className='border-t pb-24 pt-4 xl:pb-4 absolute w-full z-[2]'>
      <div className='container mx-auto'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          The source code is available on{' '}
          <a
            href='#'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
