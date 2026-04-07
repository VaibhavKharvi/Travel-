import DestinationCard from '../components/DestinationCard';
import PageHeader from '../components/PageHeader';
import destinations from '../data/destinations';

function Destinations() {
  return (
    <div className="destinations-page">
      <PageHeader
        title="All Destinations"
        subtitle="Choose your next dream vacation spot"
      />
      <div className="destinations-meta-strip">
        <span className="meta-pill">🌎 {destinations.length} curated locations</span>
        <span className="meta-pill">📆 Flexible dates</span>
        <span className="meta-pill">🧳 Perfect for first‑time travelers</span>
      </div>
      <div className="cards-container">
        {destinations.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;