"use client";

import { useEffect, useState, useRef } from 'react'
import './Header.scss'
import Link from 'next/link';
import Auth from '../../(auth)/components/auth';

export default function Header() {
  const logoElement = useRef<HTMLImageElement>(null)
  const headerElement = useRef<HTMLDivElement>(null)
  const headerContent = useRef<HTMLDivElement>(null)

  const [openModal, setOpenModal] = useState(false);

  return (
    <nav id="header" className="w-full fixed z-30 top-0 py-1">
      <div className="w-full mx-auto grid grid-cols-3 gap-0 mt-0 px-6 py-1">

        <label className="cursor-pointer lg:hidden block">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden lg:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/curtains">CURTAINS</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/blinds">BLINDS</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/guides">GUIDES</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/about">ABOUT</a></li>
            </ul>
          </nav>
        </div>

        <div className="py-2 order-1 md:order-2 text-center">
          <a className="items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
            <span className='text-teal-500'>OZ</span>SMART+LIVING
          </a>
        </div>

        <div className="flex flex-row-reverse py-2 order-2 md:order-3 text-right justify-items-center" id="nav-content">
          <a className="align-baseline inline-block mx-5 no-underline hover:text-black hover:cursor-pointer" onClick={() => setOpenModal(true)}>
            Login
          </a>
          <div className='align-baseline'>
            <a className="ml-3 inline-block no-underline hover:text-black hover:cursor-pointer">
              <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"></path>
                <circle cx="10.5" cy="18.5" r="1.5"></circle>
                <circle cx="17.5" cy="18.5" r="1.5"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Auth openModal={openModal} setOpenModal={setOpenModal} />
    </nav>
  );
}
