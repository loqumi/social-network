import "./App.css";
import Header from "./modulhtml/Header/Header";
import SidebarContainer from "./modulhtml/Sidebar/SidebarContainer";
import Profile from "./modulhtml/Profile/Profile";
import Messages from "./modulhtml/Messages/Messages";
import Music from "./modulhtml/Music/Music";
import News from "./modulhtml/News/News";
import Settings from "./modulhtml/Settings/Settings";
import UsersContainer from "./modulhtml/Users/UsersContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex container">
        <SidebarContainer />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages/*" element={<Messages />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
