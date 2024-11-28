import React from "react";
import bgHero from "../../assets/bg-hero.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bgHero}
            alt="Background"
            className="w-full h-screen bg-no-repeat bg-cover bg-center"
          />
          <div className="absolute w-full h-screen inset-0 bg-black opacity-50"></div>
        </div>

        {/* Overlay Content */}
        <div className="relative w-full h-screen z-10 flex flex-col items-end justify-end">
          <div className=" max-w-3xl max-h-96 bg-white pl-14 py-10 pr-24 rounded-ss-md">
            <h1 className="text-5xl text-black font-bold md:text-5xl">
              Berani Lapor! Tingkatkan Kualitas Layanan Publik Bersama
            </h1>
            <p className="mt-4 text-lg font-normal text-gray-600">
              Sampaikan pengalaman dan masukan Anda untuk <br /> menciptakan
              layanan publik yang lebih cepat, aman, <br /> dan memuaskan. Mari
              bersama wujudkan perubahan!
            </p>
            <button className="mt-2 px-6 py-1 bg-primary hover:bg-blue-700 text-white rounded-lg text-lg font-medium">
              LAPOR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
