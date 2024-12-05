import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import PengaduanPage from "./pages/PengaduanPage";
import StatusPengaduanPage from "./pages/StatusPengaduanPage";
import CustomerService from "./pages/CustomerService";
import NewsPage from "./pages/NewsPage";
import FormSection from "./component/pengaduan/FormSection";
import DetailPengaduan from "./component/statusPengaduan/DetailPengaduan";
import ChatBot from "./pages/ChatBot";
import DetailBerita from "./component/berita/DetailBerita";
import Landing from "./pages/Landing";
import AllStatusPengaduan from "./component/pengaduan/AllStatusPengaduan";
import Profile from "./component/profile/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pengaduan" element={<PengaduanPage />} />
        <Route path="/status-pengaduan" element={<AllStatusPengaduan />} />
        <Route
          path="/status-pengaduan/detail/:id"
          element={<DetailPengaduan />}
        />
        <Route path="/customer-service" element={<ChatBot />} />
        <Route path="/berita" element={<NewsPage />} />
        <Route path="/berita/detail/:id" element={<DetailBerita />} />
        <Route path="/pengaduan/:category" element={<FormSection />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
