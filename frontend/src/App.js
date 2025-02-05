import { BottomBar } from "./components/BottomBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Food } from "./pages/Food";
import { Pools } from "./pages/Pools";
import { Map } from "./pages/Map";
import { User } from "./pages/User";
import { Chat } from "./pages/Chat"
import { Messages } from "./pages/Messages";
import { MyCharity } from './pages/mycharity';
import { MyPost} from './pages/mypost'; 
function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Food />} />
      <Route path="/pools" element={<Pools />} />
      <Route path="/map" element={<Map />} />
      <Route path="/user" element={<User />} />
      <Route path="/chat" element={<Chat />}/>
      <Route path="/mypost" element={<MyPost />}/>
      <Route path="/mycharity" element={<MyCharity />}/>
      <Route path="/messages/:id" element={<Messages />}/>
  
    </Routes>

    <BottomBar/>
    </>
  );
}

export default App;
