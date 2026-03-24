"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  const pathname = usePathname();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full fixed z-50 bg-[#ecf0f3] shadow-xl h-20 flex items-center px-6">
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <Link href="/">
        <h1 className="text-3xl font-bold tracking-wider">
        <Link href="/" className="hover:text-gray-600 font-[sofia] uppercase transition-colors duration-200 text-[#000000]">
         Rivaa
        </Link>
      </h1>
          
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10 text-lg font-medium text-black items-center">

          {/* Shop Dropdown */}
          <li className="relative">
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="flex items-center gap-1 px-3 py-2"
            >
              Shop
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21L10 10.94l3.71-3.71 1.06 1.06-4.24 4.24-4.24-4.24z" />
              </svg>
            </button>

            {shopOpen && (
              <div className="absolute left-0 mt-2 w-52 rounded-md border bg-white shadow-lg">
                <Link
                  href="/all_products"
                  onClick={() => setShopOpen(false)}
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    pathname === "/all_products" ? "underline underline-offset-4" : ""
                  }`}
                >
                  All Products
                </Link>

                <Link
                  href="/new_collection"
                  onClick={() => setShopOpen(false)}
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    pathname === "/new_collection" ? "underline underline-offset-4" : ""
                  }`}
                >
                  New Collections
                </Link>
              </div>
            )}
          </li>

          {/* Other Links */}
          <Link href="/Sustainability">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/Sustainability" ? "underline underline-offset-4" : ""
            }`}>
              Sustainability
            </li>
          </Link>

          <Link href="/about">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/about" ? "underline underline-offset-4" : ""
            }`}>
              About
            </li>
          </Link>

          <Link href="/contact">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/contact" ? "underline underline-offset-4" : ""
            }`}>
              Contact
            </li>
          </Link>

          <Link href="/cart">
            <li className={`cursor-pointer ${
              pathname === "/cart" ? "underline underline-offset-4" : ""
            }`}>
              Cart
            </li>
          </Link>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden">
          <AiOutlineMenu
            onClick={handleMenu}
            className="text-2xl cursor-pointer text-black"
          />
        </div>
      </div>

      {/* Mobile Menu */}
<div
  className={
    menuOpen
      ? "fixed left-0 top-0 w-[65%] h-screen bg-white ease-in duration-500 flex flex-col z-50"
      : "hidden"
  }
>
  <div className="flex justify-end items-center p-6">
    <AiOutlineClose
      onClick={handleMenu}
      className="text-2xl text-black cursor-pointer"
    />
  </div>

  <ul className="flex flex-col justify-center items-start mt-10 gap-6 px-6">
    {/* Shop with dropdown */}
    <li className="w-full">
      <button
        onClick={() => setMobileShopOpen(!mobileShopOpen)}
        className="flex justify-between items-center w-full text-xl text-black"
      >
        Shop <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21L10 10.94l3.71-3.71 1.06 1.06-4.24 4.24-4.24-4.24z" />
              </svg>
        {/* <span>{mobileShopOpen ? "▲" : "▼"}</span> */}
      </button>
      {mobileShopOpen && (
        <div className="mt-2 flex flex-col  rounded-md shadow-lg">
          <Link
            href="/all_products"
            onClick={handleMenu}
            className={`px-4 py-2 text-black hover:text-black hover:underline hover:bg-amber-100 ${
              pathname === "/all_products" ? "" : ""
            }`}
          >
            All Products
          </Link>
          <Link
            href="/new_collection"
            onClick={handleMenu}
            className={`px-4 py-2 text-black hover:text-black hover:underline hover:bg-amber-100 ${
              pathname === "/new_collection" ? "underline underline-offset-4" : ""
            }`}
          >
            New Collections
          </Link>
        </div>
      )}
    </li>

    <Link href="/Sustainability" onClick={handleMenu}>
      <li className="text-xl text-black hover:underline">Sustainability</li>
    </Link>
    <Link href="/about" onClick={handleMenu}>
      <li className="text-xl text-black hover:underline">About</li>
    </Link>
    <Link href="/contact" onClick={handleMenu}>
      <li className="text-xl text-black hover:underline">Contact</li>
    </Link>
    <Link href="/cart" onClick={handleMenu}>
      <li className="bg-gray-700 text-white px-4 py-2 rounded-full">Cart</li>
    </Link>
  </ul>
</div>



    </nav>
  )
;
};

export default Navbar;