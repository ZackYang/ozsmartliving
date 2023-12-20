import Link from "next/link";

export default function Subnav() {
  return (
    <nav className="w-full shadow-md bg-zinc-100 border border-t-zinc-300 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 pl-4 pr-4 flex-row-reverse">
        <div className="max-w-screen-xl items-center justify-between hidden w-full md:flex md:w-auto md:order-1 flex-row-reverse" id="navbar-sticky">
          <ul className="flex text-zinc-400 flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link className="underline underline-offset-2 " href={'#'}>
                Designer Curtains
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                Double Curtains
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                Lined Curtains
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                Sheer Curtains
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}