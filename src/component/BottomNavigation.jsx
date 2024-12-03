import React from "react";
import { MessageSquare, PieChart, Settings, Users, User } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();

  const isActivePath = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { icon: PieChart, label: "Beranda", path: "/" },
    { icon: MessageSquare, label: "Pengaduan", path: "/pengaduan" },
    { icon: Users, label: "Status Pengaduan", path: "/status-pengaduan" },
    { icon: Settings, label: "Berita", path: "/berita" },
    { icon: User, label: "Customer Service", path: "/customer-service" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:block lg:hidden">
      <div className="flex justify-around py-2">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={label}
            to={path}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              isActivePath(path)
                ? "text-indigo-700"
                : "text-gray-500 hover:text-indigo-700"
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
