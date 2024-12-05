import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gambar1 from "../../assets/gambar1.jpg";
import Gambar2 from "../../assets/gambar2.jpg";
import Gambar3 from "../../assets/gambar3.jpg";

import { useState } from "react";

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
    id: 1,
    title: "Edukasi Lingkungan Sejak Dini",
    date: "Minggu, 27 Agustus 2024",
    description:
      "Universitas Indonesia melaksanakan program edukasi kepada siswa sekolah dasar untuk meningkatkan kesadaran mencintai lingkungan.",
    category: "Edukasi Lingkungan",
    image: Gambar1,
  },
  // Tambahkan lebih banyak data sesuai kebutuhan
];

const News = () => {
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
    <>
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Berita Terkini</h2>
          <button className="text-sm text-purple-600 hover:underline">
            Lihat lainnya →
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((news, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-medium">{news.title}</h3>
                <p className="mb-2 text-sm text-gray-600">{news.date}</p>
                <p className="text-gray-700 text-sm flex-grow">
                  {news.description}
                </p>
                <button className="text-sm text-purple-600 hover:underline">
                  Lihat selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default News;
