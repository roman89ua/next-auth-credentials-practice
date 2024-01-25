'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

const MainNavbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start text-neutral-content">
        {/*<div className="dropdown">*/}
        {/*  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">*/}
        {/*    <svg*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      className="h-5 w-5"*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      stroke="currentColor"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*        strokeWidth="2"*/}
        {/*        d="M4 6h16M4 12h8m-8 6h16"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*  </div>*/}
        {/*  <ul*/}
        {/*    tabIndex={0}*/}
        {/*    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"*/}
        {/*  ></ul>*/}
        {/*</div>*/}
        <Link
          href={{
            pathname: '/',
          }}
        >
          NEXT AUTH PRACTICE APP
        </Link>
      </div>

      {/*<div className="navbar-center hidden lg:flex">*/}
      {/*  <ul className="menu menu-horizontal px-1"></ul>*/}
      {/*</div>*/}

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src={session?.user?.image ?? '/default-user.png'}
                width="100"
                height="100"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {!!session ? (
              <>
                <li>
                  <Link
                    href={{ pathname: '/profile' }}
                    className="justify-between"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: '/settings',
                    }}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <button type="button" onClick={() => signOut()}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href={{
                      pathname: '/registration',
                    }}
                  >
                    Registrations
                  </Link>
                </li>
                <li>
                  <button type="button" onClick={() => signIn()}>
                    Login
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
