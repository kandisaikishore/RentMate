const properties = [
  { id: 1, name: "Sunrise Residency", area: "Kondapur, Hyderabad", rent: "₹22,000", beds: "2 BHK", size: "1,180 sq ft", tag: "Good commute", tone: "peach" },
  { id: 2, name: "Lakeview Heights", area: "Miyapur, Hyderabad", rent: "₹18,500", beds: "2 BHK", size: "1,050 sq ft", tag: "Great value", tone: "mint" },
  { id: 3, name: "Urban Nest", area: "Gachibowli, Hyderabad", rent: "₹30,000", beds: "3 BHK", size: "1,420 sq ft", tag: "Near offices", tone: "lavender" },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="RentMate home"><span className="brand-mark">R</span>rentmate</a>
        <nav aria-label="Main navigation"><a className="active" href="#homes">Explore homes</a><a href="#how-it-works">How it works</a></nav>
        <a className="owner-link" href="#list-home">List a home <span aria-hidden="true">↗</span></a>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> RENTING, MADE CLEAR</span>
          <h1>A place that feels<br /><em>like yours.</em></h1>
          <p>Find a home that fits your life, your commute, and your budget — without the endless scrolling.</p>
          <a className="primary-button" href="#homes">Explore available homes <span aria-hidden="true">→</span></a>
          <div className="trust-row"><span className="trust-icon">✓</span> Thoughtful listings <span className="trust-separator">·</span> Clear monthly costs</div>
        </div>
        <div className="hero-art" aria-label="Illustration of a cozy home" role="img">
          <div className="sun" /><div className="plant plant-left"><i /><i /><i /><b /></div>
          <div className="house"><div className="roof" /><div className="house-body"><div className="window"><i /><i /><i /><i /></div><div className="door" /><div className="door-knob" /></div></div>
          <div className="plant plant-right"><i /><i /><i /><b /></div><div className="ground" />
          <div className="floating-note"><span>⌂</span><div><b>Home, sweet home</b><small>Your next chapter starts here</small></div></div>
        </div>
      </section>
      <section className="search-panel" aria-label="Search rentals">
        <div className="search-field"><span>⌕</span><div><label htmlFor="location">LOCATION</label><input id="location" placeholder="Hyderabad, Telangana" /></div></div>
        <div className="search-field"><span>⌂</span><div><label htmlFor="type">PROPERTY TYPE</label><select id="type" defaultValue="any"><option value="any">Any type</option><option>Apartment</option><option>Independent house</option></select></div></div>
        <div className="search-field"><span>₹</span><div><label htmlFor="budget">MONTHLY BUDGET</label><select id="budget" defaultValue="any"><option value="any">Any budget</option><option>Under ₹20,000</option><option>₹20,000–₹30,000</option><option>Above ₹30,000</option></select></div></div>
        <a className="search-button" href="#homes">Find a home <span aria-hidden="true">→</span></a>
      </section>
      <section className="homes-section" id="homes">
        <div className="section-heading"><div><span className="eyebrow">A FEW PLACES TO START</span><h2>Homes worth a look</h2><p>Sample rental listings to help you get started.</p></div><a className="text-link" href="#homes">View all homes <span aria-hidden="true">→</span></a></div>
        <div className="property-grid">
          {properties.map((home) => <article className="property-card" key={home.id}>
            <div className={`property-art ${home.tone}`}><span className="property-tag">{home.tag}</span><button className="save-button" aria-label={`Save ${home.name}`} title="Save listing">♡</button><div className="building"><div className="building-roof" /><div className="building-face"><div className="balcony-row"><i /><i /></div><div className="balcony-row"><i /><i /></div><div className="balcony-row"><i /><i /></div></div></div><span className="art-ground" /></div>
            <div className="property-info"><div className="property-title"><h3>{home.name}</h3><span className="rent">{home.rent}<small>/mo</small></span></div><p className="property-area"><span>⌖</span> {home.area}</p><div className="property-meta"><span>{home.beds}</span><span>{home.size}</span><span>Unfurnished</span></div><a className="details-link" href="#how-it-works">View details <span aria-hidden="true">↗</span></a></div>
          </article>)}
        </div>
        <p className="demo-note">Demo listings only. Availability, rent, deposits, and property details must be verified with the owner or agent.</p>
      </section>
      <section className="how-section" id="how-it-works"><div><span className="eyebrow">A SIMPLER WAY TO RENT</span><h2>Less searching.<br /><em>More settling in.</em></h2></div><div className="how-steps"><article><span>01</span><div><h3>Find your fit</h3><p>Explore listings by location, property type, and budget.</p></div></article><article><span>02</span><div><h3>Compare clearly</h3><p>Review the details that matter before arranging a visit.</p></div></article><article><span>03</span><div><h3>Make it yours</h3><p>Connect with the owner or agent to verify the home and next steps.</p></div></article></div></section>
      <footer id="list-home"><a className="brand" href="/"><span className="brand-mark">R</span>rentmate</a><p>Made for the next place you call home.</p><span>© {new Date().getFullYear()} RentMate · Demo prototype</span></footer>
    </main>
  );
}
