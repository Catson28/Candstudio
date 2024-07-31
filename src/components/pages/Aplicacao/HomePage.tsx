import { Component } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../../partials/Aplicacao/Navbar";
import HeroSection from "../../partials/Aplicacao/HeroSection";
import FeactureSection from "../../partials/Aplicacao/FeactureSection";
import Testimonials from "../../partials/Aplicacao/Testimonials";
import CallToAction from "../../partials/Aplicacao/CallToAction";
import Footer from "../../partials/Aplicacao/Footer";
import Cartcomp from "../../partials/Aplicacao/Cartcomp";
import { theme } from "../../../services/styles/Theme";
import { GlobalStyles } from "../../../services/styles/Global";

export default class HomePage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <HeroSection />
        <FeactureSection />
        <Testimonials />
        <CallToAction />
        <Cartcomp />
        <Footer />
      </ThemeProvider>
    );
  }
}
