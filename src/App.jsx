import ThemeProvider from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import ScrollDots from "./components/ScrollDots";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import SkillExperienceSection from "./components/SkillExperienceSection";
import RecomendationsSection from "./components/RecomendationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

const App =()=>{
  return(
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-red-500 text-5xl">
  
</h1>
        <Navbar/>
        <ScrollDots />
        <div id="hero"><Hero /></div>
        <div id="projects"><ProjectSection /></div>
        <div id="skills"><SkillExperienceSection /></div>
        <div id="recomendation"><RecomendationsSection /></div>
        <div id="contact"><ContactSection /></div>
        <Footer />
      </div>

    </ThemeProvider>
  );  
};

export default App;

// export default function App() {
//   return (
//     <div className="min-h-screen bg-red-500 text-white text-4xl">
//       TEST SCREEN
//     </div>
//   );
// }