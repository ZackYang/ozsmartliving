
'use client';

import { Button, Card, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Hr from '../../../(client)/components/Hr'

export default function Register() {
  return (
    <div className='shrink-0 w-full'>
      <form className="flex flex-col gap-y-2">
        <h3 className="text-xl font-semibold text-center">Register</h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <a className='text-teal-500 hover:text-teal-700 grow text-center' href='#'>Sign in</a>
          <Button className='text-bold grow' color='teal' gradientDuoTone='tealToLime' type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}
