import { useParams, Navigate } from 'react-router-dom';
import { useCases } from '../data/use-cases/index.js';
import Footer from '../components/Footer.jsx';
import UseCaseHero from '../components/use-case/UseCaseHero.jsx';
import UseCaseRecognition from '../components/use-case/UseCaseRecognition.jsx';
import UseCaseQuestionTypes from '../components/use-case/UseCaseQuestionTypes.jsx';
import UseCaseApplications from '../components/use-case/UseCaseApplications.jsx';
import UseCaseToolbox from '../components/use-case/UseCaseToolbox.jsx';
import UseCaseStory from '../components/use-case/UseCaseStory.jsx';
import UseCaseFaq from '../components/use-case/UseCaseFaq.jsx';
import UseCasePartners from '../components/use-case/UseCasePartners.jsx';
import UseCaseAanbod from '../components/use-case/UseCaseAanbod.jsx';
import UseCaseCta from '../components/use-case/UseCaseCta.jsx';

export default function VoorSectorPage() {
  const { sector } = useParams();
  const data = useCases[sector];

  if (!data) {
    return <Navigate to="/404" replace />;
  }

  const { accentColor, label } = data;

  return (
    <main>
      <UseCaseHero          data={data} accentColor={accentColor} label={label} />
      <UseCaseRecognition   data={data} accentColor={accentColor} />
      <UseCaseQuestionTypes data={data} accentColor={accentColor} />
      <UseCaseApplications  data={data} accentColor={accentColor} />
      <UseCaseToolbox       data={data} accentColor={accentColor} />
      <UseCaseStory         data={data} />
      <UseCaseFaq           data={data} accentColor={accentColor} />
      <UseCasePartners      data={data} />
      <UseCaseAanbod        data={data} accentColor={accentColor} />
      <UseCaseCta           data={data} accentColor={accentColor} />
      <Footer />
    </main>
  );
}
