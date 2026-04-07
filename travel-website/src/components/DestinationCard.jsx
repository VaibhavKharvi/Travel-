import { Link } from 'react-router-dom';

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <div className="card-content">
        <div className="card-title-row">
          <h3>{destination.name}</h3>
          <span className="destination-pill">Top pick</span>
        </div>
        <p className="card-subtitle">{destination.shortDesc}</p>
        <div className="card-meta">
          <span>⭐ Popular</span>
          <span>📍 Highlights: {destination.attractions.length}</span>
        </div>
        <Link to={`/details/${destination.id}`} className="btn">
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default DestinationCard;