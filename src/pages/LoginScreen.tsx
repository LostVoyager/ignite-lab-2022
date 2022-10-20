import { Checkbox } from "../components/Checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { FormEvent, useState } from "react";
import axios from "axios";

export function LoginScreen() {
  const [userLoggedIn, setUserLoggedIn] = useState('');

  async function handleLogin(event: FormEvent){
    event.preventDefault();
    let input = event.currentTarget.getElementsByTagName('input');
    await axios.post('sessions', {
      email: input.namedItem('email')!.value,
      password: input.namedItem('password')!.value,
    })
    setUserLoggedIn(input.namedItem('email')!.value);
  }
  return (
    

    <div className='h-screen w-screen bg-gray-900 flex flex-col gap-8 items-center justify-center text-gray-100'>
      {userLoggedIn ? 
      <>
      <div className='flex flex-col items-stretch'>
        <Text>User: <b className="text-cyan-300">{userLoggedIn}</b> </Text>
        <Button onClick={() => setUserLoggedIn('')} id='backButton' data-testid='backButton' className='mt-4'>Logout</Button>
      </div>
      
      </>
      
      : <>
      <header className='flex flex-col items-center'>
        <Logo/>
        <Heading size='lg' className='mt-4'>
          React Login
        </Heading>
        <Text size='lg' className='text-gray-400 mt-2'>
          Welcome to the login screen!
        </Text>
      </header>

      <form onSubmit={handleLogin} className='flex flex-col items-stretch gap-4'>
        <label htmlFor='email' className='flex flex-col gap-3 w-full max-w-lg'>
          <Text className='font-semibold'>E-mail: </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' required data-testid='email' placeholder='email@address.com'/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3 w-full max-w-lg'>
          <Text className='font-semibold'>Password: </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' required data-testid='password' placeholder='********'/>
          </TextInput.Root>
        </label>

        <label htmlFor='remember'>
          <div className='flex items-center gap-2'>
            <Checkbox id='remember'/>
            <Text size='sm' className='text-gray-200'>Remember me</Text>
          </div>
        </label>
        
        <Button type='submit' id='submitButton' data-testid='submitButton' className='mt-4'>Login</Button>
        
      </form>

      <footer className='flex flex-col items-center gap-4 '>
          <Text asChild size='sm'>
            <a href='#password' className='text-gray-400 underline hover:text-gray-200'>Forgot your password?</a>
          </Text>
          <Text asChild size='sm'>
            <a href='#email' className='text-gray-400 underline hover:text-gray-200'>Register a new account</a>
          </Text>
      </footer>
      </>}
    </div>
  )
}