"use client";
import React, { useState } from "react";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header className="border-b border-gray-700 bg-gradient-to-r from-[#083a3e] to-[#06352f]">
        <div className="max-w-screen-xl m-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/favicon.png" alt="logo" width={50} height={50} />
              <span>Saddam</span>
            </div>
            <div className="absolute top-5 right-3 sm:hidden">
              <Menu onClick={() => setIsActive(!isActive)} />
            </div>
            {isActive && (
              <div>
                <ul className="sm:hidden flex flex-col justify-between items-center gap-8 absolute top-[50px] right-4 bg-gradient-to-r from-[#083a3e] to-[#06352f] p-4 rounded-md">
                  <li>
                    <Link
                      className="text-white text-[1.2rem] hover:text-xl"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white text-[1.2rem] hover:text-xl"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white text-[1.2rem] hover:text-xl"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <div className="hidden sm:flex">
              <ul className="flex justify-between items-center gap-16">
                <li>
                  <Link
                    className="text-white text-[1.2rem] hover:text-xl"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-[1.2rem] hover:text-xl"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-[1.2rem] hover:text-xl"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
