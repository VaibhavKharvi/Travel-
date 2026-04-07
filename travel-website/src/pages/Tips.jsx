import tips from '../data/tips';

const cardAccents = [
  { bg: 'linear-gradient(135deg, #667eea, #764ba2)', light: '#f3f0ff', border: '#c4b5fd' },
  { bg: 'linear-gradient(135deg, #f093fb, #f5576c)', light: '#fff0f3', border: '#fca5a5' },
  { bg: 'linear-gradient(135deg, #4facfe, #00f2fe)', light: '#eff9ff', border: '#7dd3fc' },
  { bg: 'linear-gradient(135deg, #43e97b, #38f9d7)', light: '#f0fdf4', border: '#86efac' },
  { bg: 'linear-gradient(135deg, #fa709a, #fee140)', light: '#fffbeb', border: '#fcd34d' },
  { bg: 'linear-gradient(135deg, #a18cd1, #fbc2eb)', light: '#fdf4ff', border: '#e879f9' },
];

function Tips() {
  return (
    <div className="tips-page">

      {/* Hero */}
      <div className="tips-hero">
        <div className="tips-hero-inner">
          <span className="tips-hero-badge">✈️ Travel Smarter</span>
          <h1>Essential Travel Tips</h1>
          <p>Everything you need to know for a smooth, safe, and unforgettable journey.</p>
          <div className="tips-hero-stats">
            <div className="tips-stat"><span className="tips-stat-num">6</span><span className="tips-stat-label">Categories</span></div>
            <div className="tips-stat-divider" />
            <div className="tips-stat"><span className="tips-stat-num">24</span><span className="tips-stat-label">Pro Tips</span></div>
            <div className="tips-stat-divider" />
            <div className="tips-stat"><span className="tips-stat-num">100%</span><span className="tips-stat-label">Free Advice</span></div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="tips-grid">
        {tips.map((section, idx) => {
          const accent = cardAccents[idx % cardAccents.length];
          return (
            <div key={idx} className="tip-card" style={{ '--card-light': accent.light, '--card-border': accent.border }}>
              <div className="tip-card-header" style={{ background: accent.bg }}>
                <span className="tip-card-icon">{section.category.split(' ')[0]}</span>
                <h2>{section.category.split(' ').slice(1).join(' ')}</h2>
              </div>
              <ul className="tip-card-list">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <span className="tip-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tips;
