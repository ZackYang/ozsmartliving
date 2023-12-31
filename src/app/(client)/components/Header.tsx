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
import Image from 'next/image';
import Luxuliving from '@/assets/Luxaliving.svg';
import LogoBg from '@/assets/logo_bg.svg';
import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';

const lexend = Lexend({ subsets: ['latin'], weight: ["400"] })
const playlistScript = localFont({ src: "../../../assets/PlaylistScript.otf" })


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

  const styles = {
    logoBg: {
      backgroundImage: `url(${LogoBg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'white',
      fontSize: '65px',
      textDecoration: 'none',
      paddingLeft: '20px',
    }
  }

  return (
    <nav id="header" className="bg-teal-600 w-full fixed z-30 top-0 py-0">
      <div className="w-full mx-auto grid grid-cols-3 gap-0 mt-0 px-0 py-0">
        <div className="lg:flex md:w-auto w-full order-3 md:order-1" id="menu">
          <a id="logo" className={`${playlistScript.className} inline-block no-underline`} style={styles.logoBg} href="/">
            Luxcurtain
          </a>
        </div>

        <div className="hidden lg:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
          <nav>
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
