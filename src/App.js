import "./App.css";
import Header from "./modulhtml/Header/Header";
import Sidebar from "./modulhtml/Sidebar/Sidebar";
import Profile from "./modulhtml/Profile/Profile";
import Messages from "./modulhtml/Messages/Messages";
import Music from "./modulhtml/Music/Music";
import News from "./modulhtml/News/News";
import Settings from "./modulhtml/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex container">
        <Sidebar state={props.state.sidebar} />
        <Routes>
          <Route
            path="/"
            element={
              <Profile
                data={props.state.profilepage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                data={props.state.profilepage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/messages/*"
            element={<Messages data={props.state.messagespage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
