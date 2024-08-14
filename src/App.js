import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Hentai from "./Page/Hentai/Hentai";
import Game from "./Page/Game/Game";
import Chat from "./Page/Chat/Chat";
import Blog from "./Page/Blog/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/" element={<Blog/>}></Route>
        <Route path="view" element={<Hentai/>}></Route>
        <Route path="game" element={<Game/>}></Route>
        <Route path="chat" element={<Chat/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
