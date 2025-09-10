import './app.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header>
        <h1 className="heading">Landing Page</h1>
      </header>

      {/* Body */}
      <main>
        <section className="cta-section">
          <h2 className="secondary-heading">CTA Section</h2>
          <p className="primary-text">Get 10% off your next purchase.</p>
          <button className="btn-primary">Shop Now!</button>
        </section>

        <section className="promotion-section">
          <h2 className="secondary-heading">Promotion Section</h2>
          <p className="primary-text">Take advantage of our latest deals.</p>
          <a href="/" className="btn-promo">View Deals</a>
        </section>

        <section className="lead-form-section">
          <h2 className="secondary-heading">Lead Form Section</h2>
          <form action="" method="post">
            <div className="input-group">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <button
              type="submit"
              className="btn-primary"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
};

export default LandingPage;

// -1 wrong import for App.css