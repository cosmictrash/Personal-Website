import "./App.css";
import AboutComponent from "./Components/About/about.component";
import PortfolioComponent from "./Components/Portfolio/portfolio.component";
import ContactComponent from "./Components/Contact/contact.component";
import HeaderComponent from "./Components/Header/header.component";
import ServicesComponent from "./Components/Services/services.component";

function App() {
  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
      <ServicesComponent />
      <PortfolioComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
