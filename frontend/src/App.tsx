import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import SignIn from "./pages/SignIn/page";
import Home from "./pages/Home/page";

function App() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn />} />

      </Routes>
    </main>
  );
}

export default App;
