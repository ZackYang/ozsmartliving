"use client";

import { getIronSession } from 'iron-session';
import './Header.scss'
import { SessionData } from '@/lib/session';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';

const lexend = Lexend({ subsets: ['latin'], weight: ["400"] })
const nickainley = localFont({ src: "../../../assets/Nickainley-Normal.otf" })


export default function Header() {
  return (
    <nav id="header" className="bg-teal-600 w-full fixed z-30 top-0 py-0">
      <div className="w-full mx-auto grid grid-cols-3 gap-0 mt-0 px-0 py-0">
        <div className="lg:flex md:w-auto w-full order-3 md:order-1" id="menu">
          <a id="logo" className={`${nickainley.className} flex flex-row inline-block no-underline`} href="/">
            <Image src={logo} alt="Lux curtains & blinds" className="absolute opacity-0 -mt-20" width={200} height={71} />
            <div className="text-white no-underline lux">
              Lux
            </div>
            <div className="flow flow-col">
              <div className="curtains">
                Curtains
              </div>
              <div className="blinds">
                &Blinds
              </div>
            </div>
          </a>
        </div>

        <div className="hidden lg:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
          <nav className='nav'>
            <ul className={`${lexend.className} md:flex font-semibold items-center justify-between text-base text-gray-700 pt-4 md:pt-0`}>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/curtains">Curtains</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/blinds">Blinds</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/guides">Measure&Install</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/about">Samples</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
