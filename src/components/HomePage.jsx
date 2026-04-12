import HeroSection from './HeroSection.jsx';
import PainSection from './PainSection.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import ApproachSection from './ApproachSection.jsx';
import AudienceSection from './AudienceSection.jsx';
import PricingSection from './PricingSection.jsx';
import AiSection from './AiSection.jsx';
import FaqSection from './FaqSection.jsx';
import CtaSection from './CtaSection.jsx';
import Footer from './Footer.jsx';

export default function HomePage({ navigate }) {
  return (
    <main style={{ paddingTop: 68 }}>
      <HeroSection navigate={navigate} />
      <PainSection />
      <FeaturesSection navigate={navigate} />
      <ApproachSection />
      <AudienceSection />
      <PricingSection />
      <AiSection />
      <FaqSection />
      <CtaSection />
      <Footer navigate={navigate} />
    </main>
  );
}
