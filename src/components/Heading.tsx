import {clsx} from 'clsx'
import {Slot} from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface HeadingProps{
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({size = 'md', children, asChild, className}: HeadingProps) {

  const Comp = asChild ? Slot : 'h2'; 

  let classNameInternal = clsx('text-gray-100 font-bold font-sans leading-none', 
    {
    'text-lg': size === 'sm',
    'text-xl' : size === 'md',
    'text-2xl' : size === 'lg',
    },
    className
  )

  return (
    <Comp className={classNameInternal}>
      {children}
    </Comp>
  )
}
