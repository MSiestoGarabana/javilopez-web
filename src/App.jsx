import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("Spanish");
  return (
    <>
      <Navigation language={language} setLanguage={setLanguage} />
      <div className="bodyContainer">
        <AppRoutes language={language} />
      </div>
      <Footer />
    </>
  );
}

export default App;
