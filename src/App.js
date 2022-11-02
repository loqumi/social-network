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
  let nav = [
    { path: "/", Element: Profile, data: props.state.profilepage },
    {
      path: "/profile",
      Element: Profile,
      data: props.state.profilepage,
      addPost: props.addPost,
    },
    {
      path: "/messages/*",
      Element: Messages,
      data: props.state.messagespage,
    },
    { path: "/news", Element: News },
    { path: "/music", Element: Music },
    { path: "/settings", Element: Settings },
  ];

  return (
    <BrowserRouter>
      <Header />
      <div className="flex container">
        <Sidebar state={props.state.sidebar} />
        <Routes>
          {nav.map(({ path, Element, data, addPost }) => (
            <Route
              key={path}
              path={path}
              element={<Element state={{ data }} addPost={addPost} />}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
