import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import SignIn from "./pages/SignIn/page";

function App() {
  return (
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signin" element={<SignIn />} />

      </Routes>
    </main>
  );
}

export default App;
