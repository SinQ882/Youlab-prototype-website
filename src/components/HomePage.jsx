import HeroSection from './HeroSection.jsx';
import PijlersSection from './PijlersSection.jsx';
import ImpactSection from './ImpactSection.jsx';
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
      <PijlersSection />
      <ImpactSection />
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
