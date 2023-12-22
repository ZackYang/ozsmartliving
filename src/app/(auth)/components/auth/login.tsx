
'use client';

import { Button, Card, Checkbox, FloatingLabel, Label, Modal, TextInput } from 'flowbite-react';
import Hr from '../../../(client)/components/Hr';

export default function Login() {
  return (
    <div className='shrink-0 w-full group-hover:-ml-[118%]'>
      <form className="flex flex-col gap-y-5">
        <h1 className="text-2xl font-bold text-center"><span className='text-teal-500 grayscale-0'>OZ</span>SMART+LIVING</h1>
        <Hr />
        <h3 className="mt-10 text-gray-600 text-normal font-semibold text-center">Login</h3>
        <div>
          <FloatingLabel id="email" variant='standard' type="email" required label="Email" />
        </div>
        <div>
          <FloatingLabel id="password" variant='standard' type="password" required label="Password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label className='text-gray-500' htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex items-center gap-2">
          <Button className='text-bold grow' color='teal' gradientDuoTone='tealToLime' type="submit">Submit</Button>
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
