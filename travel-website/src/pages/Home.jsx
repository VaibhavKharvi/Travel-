import DestinationCard from '../components/DestinationCard';
import PageHeader from '../components/PageHeader';
import destinations from '../data/destinations';

function Home() {
  // Get first 3 destinations for featured section
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-layout">
          <div className="hero-content">
            <h1>Discover Your Next Adventure</h1>
            <p>Explore amazing destinations, get travel tips, and plan your perfect trip.</p>
            <a href="/destinations" className="btn-hero">
              Start Exploring →
            </a>
          </div>

          <div className="hero-visual">
            <div className="hero-globe-card">
              <div className="hero-plane-orbit">
                <span className="hero-plane">✈️</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
                alt="Airplane wing over clouds"
                className="hero-image"
              />
              <div className="hero-card-badge">Live Trips Updating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-section">
        <PageHeader
          title="Featured Destinations"
          subtitle="Handpicked places travelers love right now"
        />
        <div className="cards-container">
          {featuredDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;