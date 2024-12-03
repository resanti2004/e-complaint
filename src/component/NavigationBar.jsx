import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Fungsi untuk mendeteksi scroll
  const handleScroll = () => {
    const scrollY = window.scrollY; // Jarak scroll dari atas halaman
    setIsScrolled(scrollY > 100); // Perbarui status isScrolled
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Tambah event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Bersihkan event listener
    };
  }, []);

  return (
    <header
      className={`fixed z-30 flex flex-wrap gap-x-60 sm:justify-center sm:flex-nowrap w-full text-sm transition-colors duration-500 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[85rem] w-full flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a
          className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
          href="#"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "200px", height: "72px" }}
          />
        </a>

        {/* Tombol */}
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          >
            Log in
          </button>
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-gray-800 text-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          >
            Sign Up
          </button>
        </div>

        {/* Menu Navigasi */}
        <div id="hs-navbar-alignment" className="hidden md:block md:order-2">
          <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:mt-0">
            <a className="font-medium text-white hover:font-bold" href="#">
              Beranda
            </a>
            <a className="font-medium text-white hover:font-bold" href="#">
              Tentang Kami
            </a>
            <a className="font-medium text-white hover:font-bold" href="#">
              Laporin
            </a>
            <a className="font-medium text-white hover:font-bold" href="#">
              Hubungi Kami
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
