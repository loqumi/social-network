import "./App.css";
import Header from "./modulhtml/Header/Header";
import Sidebar from "./modulhtml/Sidebar/Sidebar";
import Profile from "./modulhtml/Profile/Profile";
import Messages from "./modulhtml/Messages/Messages";
import Music from "./modulhtml/Music/Music";
import News from "./modulhtml/News/News";
import Settings from "./modulhtml/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex container">
        <Sidebar />
        <Routes>
        {nav.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />}/>
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
const nav = [
  { path: "/", Element: Profile },
  { path: "/profile", Element: Profile },
  { path: "/messages", Element: Messages },
  { path: "/news", Element: News },
  { path: "/music", Element: Music },
  { path: "/settings", Element: Settings },
];
export default App;
