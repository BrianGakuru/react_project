import Hero from "../Hero";
import ProjectSection from "../ProjectSection";
import SkillExperienceSection from "../SkillExperienceSection";
import RecomendationsSection from "../RecomendationsSection";
import ContactSection from "../ContactSection";




const Home = () => {
  return (
    <>
      <div id="hero"><Hero /></div>
      <div id="projects"><ProjectSection /></div>
      <div id="skills"><SkillExperienceSection /></div>
      <div id="recomendation"><RecomendationsSection /></div>
      <div id="contact"><ContactSection /></div>
    </>
  );
};

export default Home;