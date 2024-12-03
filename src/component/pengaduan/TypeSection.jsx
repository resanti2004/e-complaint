import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import {
  Bell,
  ChevronDown,
  Search,
  HeartPulse,
  Bus,
  Radio,
  GraduationCap,
  ShieldCheck,
  Globe,
} from "lucide-react";

const categories = [
  {
    label: "Kesehatan",
    icon: <HeartPulse className="text-slate-800 stroke-1 size-36" />,
    route: "kesehatan",
  },
  {
    label: "Transportasi",
    icon: <Bus size={40} className="text-slate-800 stroke-1 size-36" />,
    route: "transportasi",
  },
  {
    label: "Infrastruktur",
    icon: <Radio size={40} className="text-slate-800 stroke-1 size-36" />,
    route: "infrastruktur",
  },
  {
    label: "Pendidikan",
    icon: (
      <GraduationCap size={40} className="text-slate-800 stroke-1 size-36" />
    ),
    route: "pendidikan",
  },
  {
    label: "Keamanan",
    icon: <ShieldCheck size={40} className="text-slate-800 stroke-1 size-36" />,
    route: "keamanan",
  },
  {
    label: "Lingkungan",
    icon: <Globe size={40} className="text-slate-800 stroke-1 size-36" />,
    route: "lingkungan",
  },
];

const TypeSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(`/pengaduan/${route}`);
  };

  return (
    <div className="flex h-screen bg-gray-100 pb-16 md:pb-16 lg:pb-0">
      {/* Persistent Sidebar for Large Screens */}
      <Sidebar className="hidden lg:block w-64 fixed h-full" />

      <div className="flex-1 flex flex-col lg:ml-64">
        <header className=" sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-12 sm:py-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center flex-1">
                <div className="flex items-center w-full max-w-md relative">
                  <Search className="absolute left-3 h-5 w-5 text-gray-400 pointer-events-none" />
                  <input
                    type="search"
                    placeholder="Cari Disini"
                    className="w-full pl-10 pr-4 py-2 mr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="relative">
                  <Bell className="h-6 w-6 text-gray-400" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 transform translate-x-1/2 -translate-y-1/2"></span>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium">Halo! Adam</p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="flex">
            <div className="px-16 py-6 w-full ">
              <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 mb-1">
                Laporkan Sekarang, Solusi Segera!
              </h2>
              <p className="text-neutral-600 mb-10 text-xl">
                Masalah Anda adalah prioritas kami. Kirimkan laporan Anda hanya{" "}
                <br />
                dalam beberapa langkah.
              </p>

              {/* Card Container */}
              <div className="bg-white shadow-md rounded-3xl p-8 md:mr-60 md:ml-36">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-1">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className=" flex flex-col items-center cursor-pointer bg-white p-5 rounded-3xl  hover:shadow-lg transition-shadow duration-200"
                    >
                      <div onClick={() => handleCardClick(category.route)}>
                        {category.icon}
                      </div>
                      <h3 className="text-3xl font-semibold text-neutral-900">
                        {category.label}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation for Mobile and Tablet */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default TypeSection;
