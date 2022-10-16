import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Text } from './components/Text';
import './styles/global.css';

export function App() {
  return (
    <>
      <div className='h-screen w-screen bg-gray-900 flex items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center'>
          <Logo/>
          <Heading size='lg' className='mt-4'>
            React Login
          </Heading>
          <Text size='lg' className='text-gray-400 mt-2'>
            Welcome to the login screen!
          </Text>
        </header>
      </div>
    </>
  )
}
