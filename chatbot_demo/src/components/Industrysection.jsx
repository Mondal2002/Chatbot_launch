// ─── Reusable Component ───────────────────────────────────────────────────────

const FeatureCard = ({ title, description, bullets, delay = "0.4s" }) => (
  <div
    className="col-lg-4 col-md-6 wow fadeInUp"
    data-wow-duration="2s"
    data-wow-delay={delay}
  >
    <div
      className="h-100 p-4 rounded-4 bg-white shadow-sm feature-box-2"
      style={{
        border: "2px solid #e8f0ff",
        background: "linear-gradient(135deg, #f2f7ff)",
        transition: "all 0.4s ease",
        borderLeft: "4px solid #2777fc",
      }}
    >
      <h5 className="mb-3 fw-semibold text-blue">{title}</h5>
      <p className="text-muted mb-3" style={{ lineHeight: "1.7", fontSize: "15px" }}>
        {description}
      </p>
      {bullets.map((bullet, i) => (
        <div key={i} className={`d-flex align-items-start ${i < bullets.length - 1 ? "mb-2" : ""}`}>
          <span className="text-blue me-2">•</span>
          <small className="text-muted">{bullet}</small>
        </div>
      ))}
    </div>
  </div>
);

const IndustrySection = ({ icon, title, features, animationDelay = "0.3s" }) => (
  <div className="mb-5">
    <div
      className="d-flex align-items-center mb-4 wow fadeInLeft"
      data-wow-duration="2s"
      data-wow-delay={animationDelay}
    >
      <div
        className="rounded-3 p-3"
        style={{ background: "linear-gradient(135deg, #2777fc 0%, #1a5fd9 100%)" }}
      >
        {icon}
      </div>
      <h3 className="mb-0 fw-bold bit-to-right">{title}</h3>
    </div>

    <div className="row g-4 mb-5 center-all align-items-stretch">
      {features.map((feature, i) => (
        <FeatureCard
          key={i}
          title={feature.title}
          description={feature.description}
          bullets={feature.bullets}
          delay={`${0.4 + i * 0.1}s`}
        />
      ))}
    </div>
  </div>
);

export { IndustrySection, FeatureCard };
export default IndustrySection;

