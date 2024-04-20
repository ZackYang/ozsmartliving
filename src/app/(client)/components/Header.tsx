"use client";

import './Header.scss'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';
import { set } from 'lodash';

const lexend = Lexend({ subsets: ['latin'], weight: ["400"] })
const nickainley = localFont({ src: "../../../assets/Nickainley-Normal.otf" })

export default function Header() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        document.getElementById('header')?.classList.add('toggled');
        // setTimeout(() => {
        //   document.getElementById('header')?.classList.remove('reverse');
        // }, 1000);

      } else {
        const headerElement = document.getElementById('header');
        if (headerElement) {

          // document.getElementById('header')?.classList.add('reverse');
          // setTimeout(() => {
          headerElement.classList.remove('toggled');
          // }, 1000);

        }
      }
    });
  }, []);

  return (
    <div id="header" className='normal'>
      <div className="header-wrapper w-full mx-auto grid grid-cols-3 bg-teal-600 w-full gap-0 mt-0 px-0 py-0">
        <div className="lg:flex md:w-auto w-full order-3 md:order-1" id="menu">
          <a id="logo" className={`logo ${nickainley.className} flex flex-row inline-block no-underline`} href="/">
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

        <div className="hidden lg:flex md:w-auto w-full order-3 md:order-1" id="menu">
          <nav className='nav'>
            <ul className={`${lexend.className} md:flex font-semibold items-center justify-between text-base text-gray-700 pt-4 md:pt-0`}>
              <li><a className="inline-block no-underline hover:text-black hover:underline pt-2 px-4" href="/curtains">Curtains</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline pt-2 px-4" href="/blinds">Blinds</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline pt-2 px-4" href="/guides">Measure&Install</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline pt-2 px-4" href="/about">Samples</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
