import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import { Bell, ChevronDown, Search } from "lucide-react";
import Gambar1 from "../../assets/gambar1.jpg";
import Gambar2 from "../../assets/gambar2.jpg";
import Gambar3 from "../../assets/gambar3.jpg";

import { useState } from "react";
import HeaderUser from "../pengaduan/HeaderUser";

const articles = [
  {
    id: 1,
    title: "Edukasi Lingkungan Sejak Dini",
    date: "Minggu, 27 Agustus 2024",
    description:
      "Universitas Indonesia melaksanakan program edukasi kepada siswa sekolah dasar untuk meningkatkan kesadaran mencintai lingkungan.",
    category: "Edukasi Lingkungan",
    image: Gambar1,
  },
  {
    id: 2,
    title: "Trafo PLN untuk Warga Bogor",
    date: "Jumat, 30 Januari 2024",
    description:
      "Berkat aspirasi warga saat reses, masyarakat Cilekat, Bogor, kini memiliki trafo PLN yang membantu meningkatkan akses listrik lebih merata.",
    category: "Infrastruktur",
    image: Gambar2,
  },
  {
    id: 3,
    title: "Peningkatan Ketangguhan Bencana",
    date: "Sabtu, 09 Februari 2024",
    description:
      "Pemerintah menggalakkan program pelatihan menghadapi potensi gempa megathrust, fokus pada kesiapan dan keselamatan.",
    category: "Bencana",
    image: Gambar3,
  },
  {
    id: 4,
    title: "Edukasi Lingkungan Sejak Dini",
    date: "Minggu, 27 Agustus 2024",
    description:
      "Universitas Indonesia melaksanakan program edukasi kepada siswa sekolah dasar untuk meningkatkan kesadaran mencintai lingkungan.",
    category: "Edukasi Lingkungan",
    image: Gambar1,
  },
  {
    id: 5,
    title: "Trafo PLN untuk Warga Bogor",
    date: "Jumat, 30 Januari 2024",
    description:
      "Berkat aspirasi warga saat reses, masyarakat Cilekat, Bogor, kini memiliki trafo PLN yang membantu meningkatkan akses listrik lebih merata.",
    category: "Infrastruktur",
    image: Gambar2,
  },
  {
    id: 6,
    title: "Peningkatan Ketangguhan Bencana",
    date: "Sabtu, 09 Februari 2024",
    description:
      "Pemerintah menggalakkan program pelatihan menghadapi potensi gempa megathrust, fokus pada kesiapan dan keselamatan.",
    category: "Bencana",
    image: Gambar3,
  },
  // Tambahkan lebih banyak data sesuai kebutuhan
];

const SemuaBerita = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleCardClick = (route) => {
    navigate(`/pengaduan/${route}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Hitung jumlah halaman
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Dapatkan artikel untuk halaman saat ini
  const currentArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className=" min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <HeaderUser />

      <main className="flex-grow mx-auto max-w-7xl px-4 py-8">
        <div className="p-6 flex justify-center w-full min-h-screen mx-auto">
          <div className="max-w-6xl mx-auto px-14 lg:px-20">
            <h1 className="text-2xl font-bold mb-8">Berita Terkini</h1>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center">
              {currentArticles.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-col shadow-lg bg-white rounded-xl overflow-hidden cursor-pointer"
                  style={{ maxWidth: "314px", minHeight: "400px" }} // Tentukan ukuran card yang tetap
                >
                  <div className="relative overflow-hidden">
                    {/* Gambar dengan ukuran tetap */}
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{ maxWidth: "314px", maxHeight: "146px" }}
                      className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" // Tentukan ukuran gambar dan style object-cover
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h2 className="text-base font-bold hover:text-gray-700 pb-1">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 pb-4">{article.date}</p>
                    <p className="text-gray-700 text-sm flex-grow">
                      {article.description}
                    </p>
                    <a
                      href="#"
                      onClick={() => navigate(`/berita/detail/${article.id}`)}
                      className="text-blue-600 mb-auto text-xs font-bold mt-auto hover:text-blue-800 inline-block "
                    >
                      Info Selanjutnya
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SemuaBerita;
