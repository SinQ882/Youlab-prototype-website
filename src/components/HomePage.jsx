import HeroSection from './HeroSection.jsx';
import RecognitionSection from './RecognitionSection.jsx';
import PijlersSection from './PijlersSection.jsx';
import ImpactSection from './ImpactSection.jsx';
import PlatformShowcase from './home-v2/PlatformShowcase.jsx';
import AanpakSection from './AanpakSection.jsx';
import ScenarioGuide from './ScenarioGuide.jsx';
import AudienceRouter from './AudienceRouter.jsx';
import PartnersSection from './PartnersSection.jsx';
import StoryTeaser from './StoryTeaser.jsx';
import ClosingCta from './ClosingCta.jsx';
import Footer from './Footer.jsx';

export default function HomePage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <HeroSection />
      <RecognitionSection />
      <PijlersSection />
      <ImpactSection />
      <PlatformShowcase />
      <AanpakSection />
      <ScenarioGuide />
      <AudienceRouter />
      <PartnersSection />
      <StoryTeaser />
      <ClosingCta />
      <Footer />
    </main>
  );
}
