import { useParams, Navigate } from 'react-router-dom';
import { getBySlug, getRelated } from '../data/stories/index.js';
import Footer from '../components/Footer.jsx';
import StoryHero from '../components/story/StoryHero.jsx';
import StoryContext from '../components/story/StoryContext.jsx';
import StoryApproach from '../components/story/StoryApproach.jsx';
import StoryResult from '../components/story/StoryResult.jsx';
import StoryQuote from '../components/story/StoryQuote.jsx';
import StoryRelated from '../components/story/StoryRelated.jsx';

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};

export default function VerhaalDetailPage() {
  const { slug } = useParams();
  const story = getBySlug(slug);

  if (!story) {
    return <Navigate to="/verhalen" replace />;
  }

  const accentColor = SECTOR_COLORS[story.sector] ?? 'var(--primary)';
  const related = getRelated(slug);

  return (
    <main>
      <StoryHero     story={story} />
      <StoryContext  story={story} />
      <StoryApproach story={story} accentColor={accentColor} />
      <StoryResult   story={story} accentColor={accentColor} />
      <StoryQuote    story={story} accentColor={accentColor} />
      <StoryRelated  related={related} />
      <Footer />
    </main>
  );
}
