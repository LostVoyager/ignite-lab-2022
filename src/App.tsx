import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import './styles/global.css';

export function App() {
  return (
    <div className='h-screen w-screen bg-gray-900 flex flex-col gap-8 items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo/>
        <Heading size='lg' className='mt-4'>
          React Login
        </Heading>
        <Text size='lg' className='text-gray-400 mt-2'>
          Welcome to the login screen!
        </Text>
      </header>

      <form className='flex flex-col items-stretch gap-4'>
        <label htmlFor='email' className='flex flex-col gap-3 w-full max-w-lg'>
          <Text className='font-semibold'>E-mail: </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='email@address.com'/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3 w-full max-w-lg'>
          <Text className='font-semibold'>Password: </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='********'/>
          </TextInput.Root>
        </label>
        <label htmlFor='remember'>
        <div className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'>Remember me</Text>
        </div>
        </label>
        
        <Button type='submit' className='mt-4'>Login</Button>
        
      </form>

      <footer className='flex flex-col items-center gap-4 '>
          <Text asChild size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-200'>Forgot your password?</a>
          </Text>
          <Text asChild size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-200'>Register a new account</a>
          </Text>
      </footer>
    </div>
  )
}
