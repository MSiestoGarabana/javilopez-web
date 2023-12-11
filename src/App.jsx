import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("Spanish");
  console.log(language);
  return (
    <>
      <Navigation language={language} setLanguage={setLanguage} />
      <div className="bodyContainer">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
