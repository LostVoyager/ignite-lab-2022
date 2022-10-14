import {clsx} from 'clsx'
import {Slot} from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps extends InputHTMLAttributes<HTMLInputElement>{
  children: ReactNode;
}
export function TextInputRoot(props: TextInputRootProps) {
  let className = clsx('flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300', 
    {
    
    }
  )

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
}
export function TextInputInput(props: TextInputInputProps) {
  let className = 'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'

  return (
    <input className={className} {...props}/>
  )
}
TextInputInput.displayName = 'TextInput.Input';

export interface TextInputIconProps{
  children: ReactNode;
}

export function TextInputIcon(props: TextInputIconProps) {
  let className = 'w-6 h-6 text-gray-400'

  return (
    <Slot className={className}>
      {props.children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}