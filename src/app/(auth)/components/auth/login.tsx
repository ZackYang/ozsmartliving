
'use client';

import { Alert, Button, Card, Checkbox, FloatingLabel, Label, Modal, TextInput } from 'flowbite-react';
import Hr from '../../../(client)/components/Hr';
import { useState } from 'react';

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = (formData: FormData) => {
    const data = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    }

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        window.location.href = '/'
      } else {
        response.json().then(data => {
          setErrorMessage(data.message);
        })
      }
    })
  }

  return (
    <div className='shrink-0 w-full group-hover:-ml-[118%]'>
      <form className="flex flex-col gap-y-5" action={signIn}>
        <h1 className="text-2xl font-bold text-center"><span className='text-teal-500 grayscale-0'>OZ</span>SMART+LIVING</h1>
        <Hr />
        <h3 className="mt-10 text-gray-600 text-normal font-semibold text-center">Login</h3>
        <div>
          <FloatingLabel id="email" name='email' variant='standard' type="email" required label="Email" />
        </div>
        <div>
          <FloatingLabel id="password" name='password' variant='standard' type="password" required label="Password" />
        </div>
        <>
          {errorMessage && <Alert color='red' className='text-center' >{errorMessage}</Alert>}
        </>
        <div className="flex items-center gap-2">
          <Button className='text-bold grow bg-teal-600 text-white hover:text-teal-600' color='teal' type="submit">Submit</Button>
          <a className='text-teal-500 hover:text-teal-700 grow text-center' href='/register'>Register now</a>
        </div>
        <Hr />
        <div className='flex flex-row justify-center'>
          <a className='text-teal-500 hover:text-teal-700' href='#'>Forgot password?</a>
        </div>
      </form>
    </div>
  );
}
