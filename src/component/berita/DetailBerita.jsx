import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import { Bell, ChevronDown, Search, Send, ChevronLeft } from "lucide-react";
import Gambar1 from "../../assets/gambar1.jpg";
import Gambar2 from "../../assets/gambar2.jpg";
import Gambar3 from "../../assets/gambar3.jpg";

import { useState } from "react";
import HeaderUser from "../pengaduan/HeaderUser";

const DetailBerita = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className=" min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <HeaderUser />

      <main className="flex-grow mx-auto max-w-7xl px-4 py-8">
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
              dan TNI-Polri. Di Jakarta, kawasan-kawasan seperti Kampung Melayu,
              Cawang, dan Pluit menjadi wilayah terdampak terparah. Ketinggian
              air mencapai 1,5 meter di beberapa titik, mengakibatkan aktivitas
              warga lumpuh total. Hingga pagi ini, lebih dari 3.000 orang
              dilaporkan telah dievakuasi ke posko pengungsian yang tersebar di
              sekolah dan balai warga. Kepala BPBD DKI Jakarta, Isnawa Adji,
              mengatakan bahwa banjir kali ini disebabkan oleh tingginya curah
              hujan dan buruknya sistem drainase di beberapa wilayah. "Kami
              mengimbau masyarakat untuk selalu waspada dan mengikuti arahan
              petugas, terutama yang tinggal di kawasan rawan banjir," ujarnya.
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
  );
};

export default DetailBerita;
