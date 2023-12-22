'use client'

import { Alert, Button, FloatingLabel, Spinner } from 'flowbite-react';
import Hr from '../../../(client)/components/Hr';
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  async function createUser(formData: FormData) {
    setErrorMessage('')
    setSuccess(false)
    const data = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    }

    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } else {
        response.json().then(data => {
          setErrorMessage(data.message);
        })
      }
    });
  }

  return (
    <div className='shrink-0 w-full'>
      <form className="flex flex-col gap-y-5" action={createUser}>
        <h1 className="text-2xl font-bold text-center"><span className='text-teal-500 grayscale-0'>OZ</span>SMART+LIVING</h1>
        <Hr />
        <h3 className="my-10 text-normal font-semibold text-center text-gray-600">Register new account</h3>
        <div>
          <FloatingLabel id="email" name='email' variant='standard' type="email" required label="Email" />
        </div>
        <div>
          <FloatingLabel id="password" name='password' variant='standard' type="password" required label="Password" />
        </div>
        <>
          {errorMessage && <Alert color='red' className='text-center' >{errorMessage}</Alert>}
          {
            success && <Alert color='success' className='text-center' >
              <Spinner color="success" aria-label="Failure spinner example" />&nbsp;&nbsp;&nbsp;
              Creating account...
            </Alert>
          }
        </>
        <div className="flex items-center gap-2">
          <Button className='text-bold grow' color='teal' gradientDuoTone='tealToLime' type="submit">Register</Button>
          <a className='text-teal-500 hover:text-teal-700 grow text-center' href='/login'>Sign in</a>
        </div>
      </form>
    </div>
  )
}
