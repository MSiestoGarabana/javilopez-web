import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navigation />
      <div className="bodyContainer">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
