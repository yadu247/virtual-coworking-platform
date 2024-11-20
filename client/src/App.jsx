import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import IntroductionSection from './sections/IntroductionSection';
import BenefitsSection from './sections/BenefitsSection';
import HighlightsSection from './sections/HighlightsSection';
import PricingSection from './sections/PricingSection';
import LearnmoreSection from './sections/LearnmoreSection';
import DownloadableSection from './sections/DownloadableSection';
import FooterSection from './sections/FooterSection';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <BenefitsSection />
      <HighlightsSection />
      <PricingSection />
      <LearnmoreSection />
      <DownloadableSection />
      <FooterSection />
    </div>
  );
};

export default App;
