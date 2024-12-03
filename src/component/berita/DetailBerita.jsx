import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import { Bell, ChevronDown, Search, Send, ChevronLeft } from "lucide-react";
import Gambar1 from "../../assets/gambar1.jpg";
import Gambar2 from "../../assets/gambar2.jpg";
import Gambar3 from "../../assets/gambar3.jpg";

import { useState } from "react";

const DetailBerita = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
          <div
            className=" max-w-6xl mx-auto flex items-center gap-2 mb-6 cursor-pointer"
            onClick={() => navigate(-2)}
          >
            <ChevronLeft
              size={24}
              className="text-gray-700 hover:text-gray-900"
            />
            <h2 className="text-lg font-medium text-gray-700 hover:text-gray-900">
              Kembali
            </h2>
          </div>
          <div className=" max-w-6xl mx-auto bg-white rounded-2xl shadow-lg">
            {/* Image */}
            <img
              src={Gambar1} // Replace with the actual image URL
              alt="Floods"
              className="rounded-t-lg w-full h-80 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-base font-bold text-gray-800">
                Banjir Melanda Berbagai Wilayah di Indonesia, Ribuan Warga
                Mengungsi
              </h2>
              <p className="text-sm text-gray-600 mt-1">Senin, 20 Nov 2024</p>
              <p className="text-gray-500 mt-4 text-sm">
                Hujan deras yang terus mengguyur berbagai wilayah di Indonesia
                sejak beberapa hari terakhir menyebabkan banjir di beberapa
                daerah, termasuk Jakarta, Semarang, dan Bandung. Ribuan warga
                dilaporkan mengungsi ke tempat yang lebih aman, sementara upaya
                evakuasi terus dilakukan oleh tim gabungan dari BPBD, Basarnas,
                dan TNI-Polri. Di Jakarta, kawasan-kawasan seperti Kampung
                Melayu, Cawang, dan Pluit menjadi wilayah terdampak terparah.
                Ketinggian air mencapai 1,5 meter di beberapa titik,
                mengakibatkan aktivitas warga lumpuh total. Hingga pagi ini,
                lebih dari 3.000 orang dilaporkan telah dievakuasi ke posko
                pengungsian yang tersebar di sekolah dan balai warga. Kepala
                BPBD DKI Jakarta, Isnawa Adji, mengatakan bahwa banjir kali ini
                disebabkan oleh tingginya curah hujan dan buruknya sistem
                drainase di beberapa wilayah. "Kami mengimbau masyarakat untuk
                selalu waspada dan mengikuti arahan petugas, terutama yang
                tinggal di kawasan rawan banjir," ujarnya.
              </p>
            </div>
          </div>

          {/* Comments Section */}
          <div className=" my-7 p-6 max-w-6xl mx-auto bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl text-center font-semibold text-gray-800">
              Komentar
            </h3>
            <div className="flex items-center mt-2.5">
              <input
                type="text"
                placeholder="Ketikkan Komentar Anda Disini!"
                className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                className="px-4 py-2.5 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 flex items-center justify-center"
                aria-label="Send Comment"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </main>

        {/* Bottom Navigation for Mobile and Tablet */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default DetailBerita;
