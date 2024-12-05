import React, { useState } from "react";

const ComplaintHistoryCarousel = () => {
  const complaints = [
    {
      id: 1,
      title: "Jalan Berlubang",
      status: "Proses",
      date: "2023-08-15",
    },
    {
      id: 2,
      title: "Lampu Jalan Mati",
      status: "Selesai",
      date: "2023-08-10",
    },
    {
      id: 3,
      title: "Sampah Menumpuk",
      status: "Tanggapi",
      date: "2023-08-05",
    },
    {
      id: 4,
      title: "Banjir Lokal",
      status: "Proses",
      date: "2023-07-30",
    },
    {
      id: 5,
      title: "Pohon Tumbang",
      status: "Batal",
      date: "2023-07-25",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 2;
  const totalSlides = Math.ceil(complaints.length / slidesPerPage);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "selesai":
        return "bg-green-500 text-white";
      case "tanggapi":
        return "bg-blue-500 text-white";
      case "proses":
        return "bg-yellow-500 text-black";
      case "batal":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  if (complaints.length === 0) {
    return (
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Riwayat Pengaduan</h2>
        <p className="text-gray-600">Tidak ada data pengaduan tersedia.</p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Riwayat Pengaduan</h2>
        <button className="text-sm text-purple-600 hover:underline">
          Lihat lainnya →
        </button>
      </div>
      <div className="relative overflow-hidden rounded-xl p-6">
        {/* Slider Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex w-full flex-shrink-0 gap-6 px-14"
            >
              {complaints
                .slice(
                  pageIndex * slidesPerPage,
                  pageIndex * slidesPerPage + slidesPerPage
                )
                .map((complaint) => (
                  <div key={complaint.id} className="w-1/2">
                    <div className="overflow-hidden rounded-xl shadow-md bg-white p-6 transition-all duration-300 hover:shadow-lg">
                      <h3 className="mb-3 text-lg font-semibold text-gray-800">
                        {complaint.title}
                      </h3>
                      <p
                        className={`mb-2 inline-block rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                          complaint.status
                        )}`}
                      >
                        {complaint.status}
                      </p>
                      <p className="text-sm text-gray-600">
                        Tanggal: {complaint.date}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ComplaintHistoryCarousel;
