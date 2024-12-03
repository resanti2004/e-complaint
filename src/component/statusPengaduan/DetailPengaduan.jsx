import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import { Bell, ChevronDown, Search, Landmark } from "lucide-react";

const DetailPengaduan = () => {
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
          <div className="p-6 bg-gray-100 flex justify-center ">
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-5xl w-full">
              {/* Report Header */}
              <div className="shadow-md rounded-lg p-3.5 mb-4 md:w-3/5 border border-gray-100">
                {/* <h2 className="text-lg font-semibold text-gray-800">
                    Laporan: Pelayanan Lambat di Klinik Sehat Bersama
                  </h2> */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/50" // Replace with the actual image source
                    alt="Report Thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-600">
                      Laporan: Pelayanan Lambat di Klinik Sehat Bersama
                    </p>
                    <p className="text-xs font-bold text-gray-600">
                      Nomor Pengaduan: #KS123456
                    </p>
                    <p className="text-xs font-bold text-gray-600">
                      Tanggal Pengaduan: 27 November 2024
                    </p>
                    <p className="text-xs font-bold text-gray-600">
                      Kategori: Kesehatan
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Team Response */}
              <div className="flex items-start gap-x-4">
                {/* Ikon di sisi kiri */}
                <div className="bg-slate-100 rounded-full p-3 flex items-center justify-center text-slate-400 self-center">
                  <Landmark size={40} /> {/* Ikon Landmark */}
                </div>
                <div className="mb-6 md:w-10/12">
                  <h3 className="text-gray-800 font-semibold mb-2">
                    Dari Tim Dukungan
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Terima kasih telah melaporkan "Pelayanan Lambat di Klinik
                    Sehat Bersama" melalui pusat pengaduan.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Kami telah meninjau laporan Anda dan menghubungi pihak
                    manajemen klinik untuk membahas perbaikan. Klinik telah
                    menyatakan komitmennya untuk meningkatkan pelayanan,
                    termasuk dengan menambah staf di jam sibuk dan memperbaiki
                    sistem antrean.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Kami akan terus memantau pelaksanaannya dan berharap
                    pelayanan klinik menjadi lebih baik sesuai harapan Anda.
                    Terima kasih atas kepedulian Anda terhadap mutu layanan
                    kesehatan.
                  </p>
                  <p className="text-gray-700 text-sm font-semibold">
                    Salam hangat, <br />
                    Tim Dukungan Pengaduan
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
                  Balas
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Selesai
            </button>
          </div>
        </main>

        {/* Bottom Navigation for Mobile and Tablet */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default DetailPengaduan;
