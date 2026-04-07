import { useParams, useNavigate } from 'react-router-dom';
import destinations from '../data/destinations';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return (
      <div className="not-found">
        <h2>Destination not found!</h2>
        <button onClick={() => navigate('/destinations')} className="btn">Back to Destinations</button>
      </div>
    );
  }

  return (
    <div className="details-page">

      {/* Hero Banner */}
      <div className="details-hero">
        <img src={destination.image} alt={destination.name} className="details-hero-img" />
        <div className="details-hero-overlay">
          <div className="details-hero-content">
            <span className="details-region-badge">✈️ Featured Destination</span>
            <h1>{destination.name}</h1>
            <p>{destination.shortDesc}</p>
            <div className="details-chips">
              <span className="chip">⭐ Traveler Favorite</span>
              <span className="chip">📍 {destination.attractions.length} Must-See Spots</span>
              <span className="chip">💰 {destination.currency}</span>
              <span className="chip">🗣️ {destination.language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="details-body">

        {/* About */}
        <div className="details-about">
          <h2 className="details-section-title">About This Destination</h2>
          <p className="details-about-text">{destination.fullDesc}</p>
        </div>

        {/* Info Grid */}
        <div className="details-info-grid">

          <div className="details-info-card">
            <div className="details-info-icon">🗓️</div>
            <div>
              <div className="details-info-label">Best Time to Visit</div>
              <div className="details-info-value">{destination.bestTime}</div>
            </div>
          </div>

          <div className="details-info-card">
            <div className="details-info-icon">💱</div>
            <div>
              <div className="details-info-label">Currency</div>
              <div className="details-info-value">{destination.currency}</div>
            </div>
          </div>

          <div className="details-info-card">
            <div className="details-info-icon">🗣️</div>
            <div>
              <div className="details-info-label">Language</div>
              <div className="details-info-value">{destination.language}</div>
            </div>
          </div>

        </div>

        {/* Attractions */}
        <div className="details-attractions">
          <h2 className="details-section-title">🏛️ Top Attractions</h2>
          <div className="details-attractions-grid">
            {destination.attractions.map((attraction, index) => (
              <div key={index} className="details-attraction-item">
                <span className="details-attraction-num">{String(index + 1).padStart(2, '0')}</span>
                <span>{attraction}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Details;
