import "./home.css";
import HeroSection from "../../features/hero-section/hero-section";
import LoopSection from "../../features/loop-section/loop-section";
import SubjectCard from "../../features/subject-card/subject-card";
import LogoSection from "../../features/logo-section/logo-section";
import ReviewSection from "../../features/review-section/review-section";
import ContactSection from "../../features/contact-section/contact-section";
import LastSection from "../../features/last-section/last-section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LogoSection />
      <LastSection />
      <LoopSection />
      <SubjectCard />
      <ReviewSection />
      <ContactSection />
    </div>
  );
};

export default Home;
