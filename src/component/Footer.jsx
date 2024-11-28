import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-4 pt-9 pb-9 sm:px-10 sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-16 bg-primary">
        <div>
          <p className="text-white text-2xl font-bold md:text-right md:w-9/12 mb-8 text-right sm:w-full sm:text-center ">
            Hubungi Kami
          </p>
        </div>
        <div className="grid row-gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="text-2xl font-bold tracking-wide text-white">
              Alamat Kantor
            </p>
            <div className="mt-2 lg:max-w-sm sm:mb-8">
              <p className="text-2xl font-normal text-white">
                Laporin Headquarters <br /> Jl. Raya Harmoni No. 123, <br />{" "}
                Jakarta Pusat, Indonesi
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-2xl font-bold tracking-wide text-white">
                Email
              </p>
              <div className="flex">
                <a
                  href="mailto:info@lorem.mail"
                  aria-label="Our email"
                  title="Our email"
                  className="text-2xl font-normal transition-colors duration-300 text-white hover:text-deep-purple-800"
                >
                  info@laporin.id
                </a>
              </div>
            </div>

            <div>
              <p className="text-2xl font-bold tracking-wide text-white">
                Telepon
              </p>
              <div className="flex">
                <a
                  href="tel:850-123-5021"
                  aria-label="Our phone"
                  title="Our phone"
                  className="text-2xl font-normal transition-colors duration-300 text-white hover:text-deep-purple-800"
                >
                  (021) 1234-5678
                </a>
              </div>
            </div>

            <div>
              <p className="text-2xl font-bold tracking-wide text-white">
                Website
              </p>
              <div className="flex">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="text-2xl font-normal transition-colors duration-300 text-white hover:text-deep-purple-800"
                >
                  www.laporin.id
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                alt="X Logo"
                className="h-12 w-12"
              />
              <p className="text-white text-2xl font-normal ml-4">
                @laporin_id
              </p>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram Logo"
                className="h-12 w-12"
              />
              <p className="text-white text-2xl font-normal ml-4">
                @laporin_id
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook Logo"
                className="h-12 w-12"
              />
              <p className="text-white text-2xl font-normal ml-4">
                Laporin Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
