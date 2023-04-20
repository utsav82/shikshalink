import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Team from "./Teams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import GoToTop from "./components/GoToTop";
import Gallery from "./components/Gallery";

const App = () => {
  const theme = {
    colors: {
      heading: "#03045E",
      text: "#333333",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "#CAF0F8",
      footer_bg: "#03045E",
      btn: "#00B4D8",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(90deg, rgba(3,4,94,1) 0%, rgba(0,180,216,1) 35%, rgba(144,224,239,1) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
