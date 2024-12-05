import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import { Bell, ChevronDown, Search, Landmark } from "lucide-react";
import HeaderUser from "./HeaderUser";

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

const AllStatusPengaduan = () => {
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
    <div className=" min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <HeaderUser />

      <main className="flex-grow mx-auto max-w-7xl px-4 py-8">
        <div className="w-full mx-auto">
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
                onClick={() => navigate(`/status-pengaduan/detail/${item.id}`)}
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
    </div>
  );
};

export default AllStatusPengaduan;
