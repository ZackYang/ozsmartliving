"use client";

import { getIronSession } from 'iron-session';
import './Header.scss'
import Link from 'next/link';
import { cookies } from 'next/headers';
import { SessionData, sessionOptions } from '@/lib/session';
import { CgProfile } from "react-icons/cg";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { useEffect, useState } from 'react';
import { CiBoxList } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";

export default function Header() {
  const [user, setUser] = useState<SessionData | null>(null);
  const [userManuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/user')
      const data = await res.json()
      setUser(data)
    }

    fetchData()
  }, [])

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
          <div className='absolute text-white flex bg-teal-600 flex-row h-full items-center top-0 right-0 block ml-5 no-underline hover:cursor-pointer'>
            {
              user?.email
                ? <div className="inline-block mx-5 no-underline hover:cursor-pointer">
                  <CgProfile class={`text-2xl ${userManuOpen && 'userIconActive'}`} onClick={() => { setUserMenuOpen(!userManuOpen) }} />
                  <div className={`${userManuOpen ? 'showUserMenu' : 'hidden'} h-screen mt-3 bg-teal-600 absolute left-0`}>
                    <ul
                      className={`w-full rounded-0  mt-5`}
                    >
                      <Link className='flex flex-row block hover:no-underline text-left p-3 hover:bg-white hover:text-teal-600' href='/orders'>
                        <div className='inline-block align-middle'>
                          <CiBoxList class='text-2xl mr-2 ml-2' />
                        </div>
                        Orders
                      </Link>
                      <Link className='flex flex-row block hover:no-underline text-left p-3 hover:bg-white hover:text-teal-600' href='/account'>
                        <div className='inline-block'>
                          <MdOutlineManageAccounts class='text-2xl ml-2 mr-2' />
                        </div>
                        Account
                      </Link>
                      <a className='flex flex-row block hover:no-underline text-left p-3 hover:bg-white hover:text-teal-600' href='/logout'>
                        <div className='inline-block'>
                          <BiLogOutCircle class='text-2xl ml-2 mr-2' />
                        </div>
                        Logout
                      </a>
                    </ul>
                  </div>
                </div>
                : <Link href='/login' className="inline-block mx-5 no-underline hover:text-black hover:cursor-pointer">
                  Login
                </Link>
            }
            <Link href='/cart' className="mx-5 inline-block no-underline hover:text-black hover:cursor-pointer">
              <PiShoppingCartSimpleDuotone class="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
