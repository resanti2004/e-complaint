import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import BottomNavigation from "../BottomNavigation";
import { Bell, ChevronDown, Search } from "lucide-react";

const FormSection = () => {
  const { category } = useParams();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: category || "",
    title: "",
    location: "",
    description: "",
    image: null,
  });

  // Validation Errors
  const [errors, setErrors] = useState({});

  const validateStepOne = () => {
    const newErrors = {};
    if (!formData.title || formData.title.length < 5)
      newErrors.title = "Judul harus memiliki minimal 5 karakter.";
    if (!formData.location) newErrors.location = "Lokasi wajib diisi.";
    if (!formData.description || formData.description.length < 10)
      newErrors.description = "Deskripsi minimal 10 karakter.";
    return newErrors;
  };

  const handleNext = () => {
    if (step === 1) {
      const stepOneErrors = validateStepOne();
      if (Object.keys(stepOneErrors).length > 0) {
        setErrors(stepOneErrors);
        return;
      }
    }
    setErrors({});
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = () => {
    alert("Data berhasil dikirim!");
    console.log("Form Data:", formData);
  };

  const handleFileChangeImage = (e) => {
    const file = e.target.files[0];
    if (file && uploadedImages.length < 3) {
      setUploadedImages((prev) => [...prev, file]);
    }
  };

  const handleRemoveImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen bg-gray-100 pb-16 md:pb-16 lg:pb-0">
      {/* Persistent Sidebar for Large Screens */}
      <Sidebar className="hidden lg:block w-64 fixed h-full" />

      <div className="flex-1 flex flex-col lg:ml-64">
        <header className=" sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-12 sm:py-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center flex-1"></div>

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
          <div className="min-h-screen flex flex-col items-center  bg-gray-100 space-y-6">
            {/* Step Indicator Container */}
            <div className="w-full max-w-2xl bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-7 w-7 text-xs flex items-center justify-center rounded-full ${
                      step >= 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {step > 1 ? "✔" : "1"}
                  </div>
                  <span className="text-sm font-semibold mt-2">
                    Tulis Laporan
                  </span>
                </div>
                <div
                  className={`h-px flex-1 mx-4 ${
                    step > 1 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-7 w-7 text-xs flex items-center justify-center rounded-full ${
                      step >= 2 ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {step > 2 ? "✔" : "2"}
                  </div>
                  <span className="text-sm font-semibold mt-2">
                    Pilih Bukti
                  </span>
                </div>
                <div
                  className={`h-px flex-1 mx-4 ${
                    step > 2 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-7 w-7 text-xs flex items-center justify-center rounded-full ${
                      step === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    3
                  </div>
                  <span className="text-sm mt-2 font-semibold">Selesai</span>
                </div>
              </div>
            </div>

            {/* Step Content Container */}
            <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow">
              {step === 1 && (
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Kategori Laporan
                      </label>
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full max-w-sm border rounded-lg p-2 "
                        placeholder={category}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Judul Laporan
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full max-w-sm border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Masukkan Judul Laporan Anda"
                      />
                      {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Lokasi
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full max-w-sm border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Lokasi Kejadian"
                      />
                      {errors.location && (
                        <p className="text-red-500 text-sm">
                          {errors.location}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Deskripsi
                      </label>
                      <textarea
                        rows={5}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full max-w-lg border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Deskripsikan laporan anda!"
                      />
                      {errors.description && (
                        <p className="text-red-500 text-sm">
                          {errors.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="max-w-xl max-h-xl md:mt-12 shadow-lg mx-auto border-2 border-dashed border-gray-300 rounded-lg p-6 text-center relative">
                    {/* Icon */}
                    <div className="text-blue-500 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 15a4 4 0 014-4h10a4 4 0 014 4v6H3v-6zM8 3h8m0 0v6m0-6L9.293 12.293a1 1 0 01-1.414 0L5 9"
                        />
                      </svg>
                    </div>

                    {/* Text Description */}
                    <p className="text-sm font-medium text-gray-600">
                      Masukan Foto Bukti Anda{" "}
                      <label
                        htmlFor="file-upload"
                        className={`${
                          uploadedImages.length >= 3
                            ? "text-gray-400"
                            : "text-blue-500"
                        } cursor-pointer`}
                      >
                        browse
                      </label>
                    </p>
                    <p className="text-xs text-gray-400">Maximum size: 10MB</p>

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (uploadedImages.length < 3) handleFileChangeImage(e);
                      }}
                      id="file-upload"
                      disabled={uploadedImages.length >= 3}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>

                  {/* Display Uploaded Images */}
                  {uploadedImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Bukti ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg border"
                          />
                          {/* Remove Image Button */}
                          <button
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Error Message */}
                  {uploadedImages.length >= 3 && (
                    <p className="mt-2 text-sm text-red-500">
                      Anda hanya dapat mengunggah maksimal 3 foto.
                    </p>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="w-full max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">Konfirmasi Data</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Kolom Kiri */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Kategori Laporan
                        </label>
                        <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                          {formData.category}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Judul Laporan
                        </label>
                        <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                          {formData.title}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Lokasi
                        </label>
                        <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                          {formData.location}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Deskripsi
                        </label>
                        <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 whitespace-pre-line">
                          {formData.description}
                        </div>
                      </div>
                    </div>

                    {/* Kolom Kanan */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bukti Foto
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {uploadedImages.length > 0 ? (
                          uploadedImages.map((image, index) => (
                            <img
                              key={index}
                              src={URL.createObjectURL(image)}
                              alt={`Bukti ${index + 1}`}
                              className="w-full h-28 object-cover rounded-lg border"
                            />
                          ))
                        ) : (
                          <p className="text-gray-500">
                            Tidak ada bukti foto yang diunggah
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Kembali
                  </button>
                )}
                {step < 3 && (
                  <button
                    onClick={handleNext}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Lanjut
                  </button>
                )}
                {step === 3 && (
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Kirim
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation for Mobile and Tablet */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default FormSection;
