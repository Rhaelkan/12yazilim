"use client";

import logo from "@/public/12logo.png";
import Image from "next/image";
import { DropDown, GetInfoButton } from ".";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    {
      id: 0,
      title: "Ürünler & Hizmetler",
    },
    {
      id: 1,
      title: "Sektörler",
    },
    {
      id: 2,
      title: "İş Ortakları",
    },
    {
      id: 3,
      title: "Kurumsal",
    },
    {
      id: 4,
      title: "İletişim",
    },
  ];

  return (
    <header>
      <nav className="flex flex-row items-center justify-between p-4 shadow-lg xl:px-8">
        <Image src={logo} alt="logo" width={185} height={185} />

        <div className="flex flex-row items-center space-x-8 max-xl:hidden font-light tracking-wide text-gray-600">
          {navItems.map((item) => (
            <DropDown itemTitle={item.title} id={item.id} />
          ))}
        </div>

        <div className="flex flex-row space-x-4 items-center">
          <button className="text-red-600 flex flex-row space-x-2 bg-white py-3 px-5 border-2 border-red-600 rounded-full text-sm max-sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <h1>0850 302 03 04</h1>
          </button>

          <GetInfoButton />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 cursor-pointer xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="bg-white shadow-lg h-screen absolute w-[400px] top-0 right-0">
          <div className="flex flex-row items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer m-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col border-b">
            {navItems.map((item) => (
              <div className="text-center border-t py-2">
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
