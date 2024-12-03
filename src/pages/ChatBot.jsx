import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import BottomNavigation from "../component/BottomNavigation";
import { Bell, ChevronDown, Search } from "lucide-react";

const ChatBox = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(`/pengaduan/${route}`);
  };

  return (
    <div className="flex h-screen bg-gray-100 pb-16 md:pb-16 lg:pb-0">
      {/* Persistent Sidebar for Large Screens */}
      <Sidebar className="hidden lg:block w-64 fixed h-full" />

      <div className="flex-1 flex flex-col lg:ml-64">
        <header className=" sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-12 sm:py-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center flex-1">
                {/* <div className="flex items-center w-full max-w-md relative">
                  <Search className="absolute left-3 h-5 w-5 text-gray-400 pointer-events-none" />
                  <input
                    type="search"
                    placeholder="Cari Disini"
                    className="w-full pl-10 pr-4 py-2 mr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div> */}
              </div>

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

        <main className="flex-1">
          <div className="flex h-full mb-4 items-center justify-center md:mx-14">
            <div className="m-2 w-full h-full border flex flex-col rounded-xl  bg-white ">
              <header className="w-full bg-primary flex justify-between px-2 py-1 rounded-t-lg items-center">
                <h2 className="text-sm font-semibold text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 w-6"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M4 15.5a2 2 0 1 1 0-4m16 4a2 2 0 1 0 0-4M7 7V4m10 3V4" />
                      <circle cx="7" cy="3" r="1" />
                      <circle cx="17" cy="3" r="1" />
                      <path d="M13.5 7h-3c-2.828 0-4.243 0-5.121.909S4.5 10.281 4.5 13.207s0 4.389.879 5.298c.878.909 2.293.909 5.121.909h1.025c.792 0 1.071.163 1.617.757c.603.657 1.537 1.534 2.382 1.738c1.201.29 1.336-.111 1.068-1.256c-.076-.326-.267-.847-.066-1.151c.113-.17.3-.212.675-.296c.591-.132 1.079-.348 1.42-.701c.879-.91.879-2.372.879-5.298s0-4.389-.879-5.298C17.743 7 16.328 7 13.5 7" />
                      <path d="M9.5 15c.57.607 1.478 1 2.5 1s1.93-.393 2.5-1m-5.491-4H9m6.009 0H15" />
                    </g>
                  </svg>
                  Chatbot
                </h2>
                <span className="text-white aspect-square w-8 cursor-pointer p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="#ffffff"
                      d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"
                    />
                  </svg>
                </span>
              </header>

              <div className="flex flex-col gap-4 p-2 select-none">
                <div className="flex items-end">
                  <div className="rounded bg-primary-500 w-8 aspect-square p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 15.5a2 2 0 1 1 0-4m16 4a2 2 0 1 0 0-4M7 7V4m10 3V4" />
                        <circle cx="7" cy="3" r="1" />
                        <circle cx="17" cy="3" r="1" />
                        <path d="M13.5 7h-3c-2.828 0-4.243 0-5.121.909S4.5 10.281 4.5 13.207s0 4.389.879 5.298c.878.909 2.293.909 5.121.909h1.025c.792 0 1.071.163 1.617.757c.603.657 1.537 1.534 2.382 1.738c1.201.29 1.336-.111 1.068-1.256c-.076-.326-.267-.847-.066-1.151c.113-.17.3-.212.675-.296c.591-.132 1.079-.348 1.42-.701c.879-.91.879-2.372.879-5.298s0-4.389-.879-5.298C17.743 7 16.328 7 13.5 7" />
                        <path d="M9.5 15c.57.607 1.478 1 2.5 1s1.93-.393 2.5-1m-5.491-4H9m6.009 0H15" />
                      </g>
                    </svg>
                  </div>
                  <p className="mx-2 p-2 rounded bg-gray-200 leading-4 text-sm">
                    Hi there 👋
                    <br />
                    How can I help you today?
                  </p>
                </div>
                <div className="flex items-end flex-row-reverse">
                  <div className="rounded bg-primary-500 w-8 aspect-square p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#ffffff"
                        d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
                      />
                    </svg>
                  </div>
                  <p className="mx-2 p-2 rounded bg-gray-200 leading-4 text-sm">
                    Hi there 👋
                    <br />
                    How can I help you today?
                  </p>
                </div>
              </div>

              <div className="flex items-center my-2 mx-1">
                <textarea
                  id="chat"
                  rows="1"
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
                <button
                  type="submit"
                  className="flex justify-center items-center aspect-square h-9 bg-primary-500  p-2 text-white rounded-full cursor-pointer hover:bg-primary-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"
                    />
                  </svg>
                </button>
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

export default ChatBox;
