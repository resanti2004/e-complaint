import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import { Bell, ChevronDown, Search, Landmark } from "lucide-react";

const buttons = [
  "Semua",
  "Terselesaikan",
  "Ditanggapi",
  "Diproses",
  "Dibatalkan",
];

const statusList = [
  {
    id: 1,
    title: "Dari Tim Dukungan",
    status: "Selesai",
    description:
      "Terima kasih telah melaporkan Kurangnya Penerangan di Jalan Kompleks melalui pusat pengaduan. Kami ingin menginformasikan bahwa laporan anda telah selesai.",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Dari Tim Dukungan",
    status: "Tanggapi",
    description:
      "Terima kasih telah melaporkan Kurangnya Fasilitas di SMAN 1 Ciamis melalui pusat pengaduan. Kami ingin menginformasikan bahwa tim dukungan kami telah menanggapi laporan Anda. Mohon tinjau tanggapan tersebut.",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Dari Tim Dukungan",
    status: "Proses",
    description:
      "Terima kasih telah melaporkan Kondisi Jalan Rusak di Jalan Raya Merdeka melalui pusat pengaduan. Kami ingin menginformasikan bahwa laporan anda sedang di proses tim dukungan kami, untuk di tindak lanjuti.",
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Dari Tim Dukungan",
    status: "Batal",
    description:
      "Terima kasih telah melaporkan Penumpukan Sampah di Sungai Warga melalui pusat pengaduan. Kami ingin menginformasikan bahwa laporan anda telah dibatalkan.",
    color: "bg-red-400",
  },
  {
    id: 5,
    title: "Dari Tim Dukungan",
    status: "Selesai",
    description:
      "Terima kasih telah melaporkan Pelayanan Bus Kota Yang Tidak Tepat Waktu melalui pusat pengaduan. Kami ingin menginformasikan bahwa laporan anda telah selesai.",
    color: "bg-green-500",
  },
  {
    id: 6,
    title: "Dari Tim Dukungan",
    status: "Tanggapi",
    description:
      "Terima kasih telah melaporkan Pelayanan Lambat di Klinik Sehat Bersama melalui pusat pengaduan. Kami ingin menginformasikan bahwa tim dukungan kami telah menanggapi laporan Anda. Mohon tinjau tanggapan tersebut.",
    color: "bg-blue-500",
  },
];

const HistoryPengaduan = () => {
  const [activeButton, setActiveButton] = useState("Semua");
  const navigate = useNavigate();
  const { id } = useParams();

  // Filter daftar pengaduan berdasarkan tombol yang aktif
  const filteredStatusList =
    activeButton === "Semua"
      ? statusList
      : statusList.filter((item) => {
          if (activeButton === "Terselesaikan")
            return item.status === "Selesai";
          if (activeButton === "Ditanggapi") return item.status === "Tanggapi";
          if (activeButton === "Diproses") return item.status === "Proses";
          if (activeButton === "Dibatalkan") return item.status === "Batal";
          return false;
        });

  return (
    <div className=" h-screen w-full bg-gray-100 ">
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
          <div className="w-full mx-auto px-12 py-4">
            <div className="flex space-x-4 mb-4">
              {buttons.map((button) => (
                <button
                  key={button}
                  onClick={() => setActiveButton(button)}
                  className={`px-4 py-2 rounded-lg font-semibold border ${
                    activeButton === button
                      ? "bg-primary text-white"
                      : "bg-white text-primary border-primary"
                  }`}
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {filteredStatusList.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    navigate(`/status-pengaduan/detail/${item.id}`)
                  }
                  className="bg-white shadow-md rounded-2xl p-6 flex justify-between items-start gap-x-4 cursor-pointer"
                >
                  {/* Ikon di sisi kiri */}
                  <div className="bg-slate-100 rounded-full p-3 flex items-center justify-center text-slate-400 self-center">
                    <Landmark size={40} /> {/* Ikon Landmark */}
                  </div>

                  {/* Konten */}
                  <div className="w-10/12">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  {/* Status */}
                  <div className="flex flex-col justify-start">
                    <span
                      className={`text-white px-4 py-1 rounded-lg text-sm font-semibold text-center w-24 ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Bottom Navigation for Mobile and Tablet */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default HistoryPengaduan;
