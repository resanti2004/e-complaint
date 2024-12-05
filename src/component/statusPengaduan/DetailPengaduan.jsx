import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import { Bell, ChevronDown, Search, Landmark } from "lucide-react";
import HeaderUser from "../pengaduan/HeaderUser";

const DetailPengaduan = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(`/pengaduan/${route}`);
  };

  return (
    <div className=" min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <HeaderUser />

      <main className="flex-grow mx-auto max-w-7xl px-4 py-8">
        <div className="p-6 flex justify-center w-full mx-auto">
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
                  menyatakan komitmennya untuk meningkatkan pelayanan, termasuk
                  dengan menambah staf di jam sibuk dan memperbaiki sistem
                  antrean.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Kami akan terus memantau pelaksanaannya dan berharap pelayanan
                  klinik menjadi lebih baik sesuai harapan Anda. Terima kasih
                  atas kepedulian Anda terhadap mutu layanan kesehatan.
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
    </div>
  );
};

export default DetailPengaduan;
