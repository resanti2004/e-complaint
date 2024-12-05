import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, ChevronDown, ChevronUp, User, LogOut } from "lucide-react";
import Logo from "../../assets/logo.png";

const HeaderUser = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a
                className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
                href="#"
              >
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ width: "200px", height: "72px" }}
                />
              </a>{" "}
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link
                to="/pengaduan"
                className={`border-b-2 px-1 py-4 text-sm font-medium ${
                  location.pathname === "/pengaduan"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Beranda
              </Link>
              <Link
                to="/status-pengaduan"
                className={`border-b-2 px-1 py-4 text-sm font-medium ${
                  location.pathname === "/status-pengaduan"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Status Pengaduan
              </Link>
              <Link
                to="/berita"
                className={`border-b-2 px-1 py-4 text-sm font-medium ${
                  location.pathname === "/berita"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Berita
              </Link>
            </nav>

            {/* Profile and Mobile Menu */}
            <div className="flex items-center gap-6">
              <button className="relative">
                <Bell className="h-6 w-6 text-gray-400" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 transform translate-x-1/2 -translate-y-1/2"></span>
              </button>
              <div
                className="flex items-center space-x-2 relative"
                ref={dropdownRef}
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Halo! Adam</p>
                  <p className="text-xs text-gray-500">User</p>
                </div>
                <button onClick={toggleDropdown}>
                  {isDropdownOpen ? (
                    <ChevronUp className="h-4 w-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  )}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 top-full">
                    <Link
                      to="/profile"
                      className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                    <Link
                      to="/logout"
                      className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Log out
                    </Link>
                  </div>
                )}
              </div>
              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 pb-4">
            <Link
              to="/pengaduan"
              className={`block py-2 text-sm font-medium ${
                location.pathname === "/pengaduan"
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/status-pengaduan"
              className={`block py-2 text-sm font-medium ${
                location.pathname === "/status-pengaduan"
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Status Pengaduan
            </Link>
            <Link
              to="/berita"
              className={`block py-2 text-sm font-medium ${
                location.pathname === "/berita"
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Berita
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderUser;
