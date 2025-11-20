import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/router/AppRouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

// <Navbar />
function App() {
  return (
      <BrowserRouter>
        <main className="main-container">
          <AppRouter />
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
