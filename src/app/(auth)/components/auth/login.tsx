
'use client';

import { Button, Card, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Hr from '../../../(client)/components/Hr';

export default function Login() {
  return (
    <div className='shrink-0 w-full group-hover:-ml-[118%]'>
      <form className="flex flex-col gap-y-2">
        <h3 className="text-xl font-semibold text-center">Login</h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex items-center gap-2">
          <Button className='text-bold grow' color='teal' gradientDuoTone='tealToLime' type="submit">Submit</Button>
          <a className='text-teal-500 hover:text-teal-700 grow text-center' href='#'>Register now</a>
        </div>
        <Hr />
        <div className='flex flex-row justify-center'>
          <a className='text-teal-500 hover:text-teal-700' href='#'>Forgot password?</a>
        </div>
      </form>
    </div>
  );
}
