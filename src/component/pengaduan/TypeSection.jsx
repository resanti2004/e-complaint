import { useState, useEffect } from "react";
import ComplaintHistoryCarousel from "./ComplaintHistoryCarousel.jsx";
import News from "./News.jsx";
import HeaderUser from "./HeaderUser.jsx";
import { ImagePlus } from "lucide-react";

export default function TypeSection() {
  const [formData, setFormData] = useState({
    kategori: "",
    judul: "",
    lokasi: "",
    deskripsi: "",
  });

  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);

  const validate = () => {
    const newErrors = {};

    if (!formData.kategori) {
      newErrors.kategori = "Kategori laporan harus dipilih.";
    }

    if (!formData.judul || formData.judul.length < 5) {
      newErrors.judul = "Judul laporan harus diisi dan minimal 5 karakter.";
    }

    if (!formData.lokasi) {
      newErrors.lokasi = "Lokasi kejadian harus diisi.";
    }

    if (!formData.deskripsi || formData.deskripsi.length < 10) {
      newErrors.deskripsi = "Deskripsi harus diisi dan minimal 10 karakter.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for the field being updated
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 3) {
      alert("Maksimal 3 gambar yang dapat diunggah.");
      return;
    }

    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted", formData);
      alert("Laporan berhasil dikirim!");
      // Reset form data if necessary
      setFormData({ kategori: "", judul: "", lokasi: "", deskripsi: "" });
      setImages([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <HeaderUser />

      <main className="flex-grow mx-auto max-w-7xl px-4 py-8">
        {/* Form Section */}
        <div className="mb-12">
          <h1 className="mb-1 text-2xl font-bold">
            Hallo, Selamat Datang Bright Vaci!
          </h1>
          <p className="text-sm text-gray-600">
            Sampaikan Keluhan Anda Kami Siap Membantu
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-8 md:grid-cols-[2fr,1fr]"
          >
            <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm">
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Kategori Laporan
                </label>
                <select
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  className={`w-full rounded-md border p-2 ${
                    errors.kategori ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Pilih Kategori</option>
                  <option value="layanan">Layanan</option>
                  <option value="infrastruktur">Infrastruktur</option>
                  <option value="lingkungan">Lingkungan</option>
                </select>
                {errors.kategori && (
                  <p className="text-red-500 text-sm">{errors.kategori}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-lg font-medium">
                  Judul Laporan
                </label>
                <input
                  type="text"
                  name="judul"
                  placeholder="Masukan Judul Laporan Anda"
                  value={formData.judul}
                  onChange={handleChange}
                  className={`w-full rounded-md border p-2 ${
                    errors.judul ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.judul && (
                  <p className="text-red-500 text-sm">{errors.judul}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-lg font-medium">Lokasi</label>
                <input
                  type="text"
                  name="lokasi"
                  placeholder="Lokasi Kejadian"
                  value={formData.lokasi}
                  onChange={handleChange}
                  className={`w-full rounded-md border p-2 ${
                    errors.lokasi ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lokasi && (
                  <p className="text-red-500 text-sm">{errors.lokasi}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-lg font-medium">
                  Deskripsi
                </label>
                <textarea
                  rows="5"
                  name="deskripsi"
                  placeholder="Deskripsikan laporan anda!"
                  value={formData.deskripsi}
                  onChange={handleChange}
                  className={`w-full rounded-md border p-2 ${
                    errors.deskripsi ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.deskripsi && (
                  <p className="text-red-500 text-sm">{errors.deskripsi}</p>
                )}
              </div>

              <button className="w-full rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                Kirim Laporan
              </button>
            </div>

            <div className="rounded-xl h-fit bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-medium">Bukti Foto</h3>
              <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-6">
                <ImagePlus className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-base font-medium">
                    Masukan Foto Bukti Anda{" "}
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer text-blue-500 hover:underline"
                    >
                      browse
                    </label>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Maximum size: 10MB
                  </p>
                </div>
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleImageRemove(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-center py-auto"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Complaint History Carousel */}
        <ComplaintHistoryCarousel />

        {/* News Section */}
        <News />
      </main>

      {/* Footer */}
      <footer className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
              <p className="text-sm text-gray-800">
                Kami adalah platform pengaduan masyarakat yang bertujuan untuk
                meningkatkan kualitas layanan publik.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-800 hover:text-white"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-800 hover:text-white"
                  >
                    Status Pengaduan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-800 hover:text-white"
                  >
                    Berita
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-800 hover:text-white"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-800">
                  Email: info@example.com
                </li>
                <li className="text-sm text-gray-800">
                  Telepon: (021) 1234-5678
                </li>
                <li className="text-sm text-gray-800">
                  Alamat: Jl. Contoh No. 123, Jakarta
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-1.494 1.49-2.57 3.935-2.57 6.203v1.482h-2.994V12h2.994v6.878C18.343 21.128 22 16.991 22 12zm-10-7a3 3 0 100 6 3 3 0 000-6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-800 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-800 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
