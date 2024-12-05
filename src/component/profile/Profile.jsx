import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Landmark,
  Camera,
  User,
  Mail,
  Phone,
  Lock,
  Pencil,
  Eye,
  EyeOff,
} from "lucide-react";
import HeaderUser from "../pengaduan/HeaderUser";

const Profile = () => {
  const [name] = useState("Bright Vaci");
  const [email] = useState("brightvaci123@gmail.com");
  const [phone] = useState("+62 875292033");
  const [password] = useState("••••••");

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleSave = () => {
    setName(newName);
    setIsPopupOpen(false);
  };

  const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleSavePassword = () => {
    // Logika penyimpanan password
    console.log("Password lama:", oldPassword);
    console.log("Password baru:", newPassword);
    setIsPasswordPopupOpen(false);
  };

  return (
    <div className=" min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <HeaderUser />

      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-8">Profil Pengguna</h1>

        {/* Profile Card */}
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover"
              />
              <div className="absolute right-1 bottom-1 rounded-full bg-blue-500 p-2 cursor-pointer">
                <Camera className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={name}
                  readOnly
                  disabled
                  className="w-full rounded-md border border-gray-200 py-2.5 pl-12 pr-10 bg-gray-50 cursor-not-allowed"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  aria-label="Edit name"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <Pencil className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  readOnly
                  disabled
                  className="w-full rounded-md border border-gray-200 py-2.5 pl-12 bg-gray-50 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                No HandPhone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  readOnly
                  disabled
                  className="w-full rounded-md border border-gray-200 py-2.5 pl-10 bg-gray-50 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  readOnly
                  disabled
                  className="w-full rounded-md border border-gray-200 py-2.5 pl-10 pr-10 bg-gray-50 cursor-not-allowed"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  aria-label="Edit password"
                  onClick={() => setIsPasswordPopupOpen(true)}
                >
                  <Pencil className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popup for Editing Name */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-96">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Masukan Nama Anda</h2>
                <button
                  className="text-gray-400"
                  onClick={() => setIsPopupOpen(false)}
                >
                  Tutup
                </button>
              </div>
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2.5 pl-10"
                  />
                </div>
              </div>
              <button
                className="w-full bg-blue-600 text-white rounded-md py-2 font-medium"
                onClick={handleSave}
              >
                Simpan
              </button>
            </div>
          </div>
        )}

        {/* Password Popup */}
        {isPasswordPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-96">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Ubah Password</h2>
                <button
                  className="text-gray-400"
                  onClick={() => setIsPasswordPopupOpen(false)}
                >
                  Tutup
                </button>
              </div>

              {/* Old Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Masukan Password Lama
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showOldPassword ? "text" : "password"}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-10"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  >
                    {showOldPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Masukan Password Baru
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-10"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 text-white rounded-md py-2 font-medium"
                onClick={handleSavePassword}
              >
                Simpan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
