// ─── Reusable Component ───────────────────────────────────────────────────────

const IndustryCard = ({ title, description, checks, delay = "0.4s" }) => (
  <div
    className="col-lg-4 col-md-6 wow fadeInUp"
    data-wow-duration="2s"
    data-wow-delay={delay}
  >
    <div className="h-100 p-4 rounded-4 position-relative overflow-hidden feature-box-2 bg-for-cards">
      <h4 className="mb-3 fw-bold">{title}</h4>
      <p className="mb-3" style={{ fontSize: "15px", opacity: "0.95" }}>
        {description}
      </p>
      {checks.map((check, i) => (
        <div
          key={i}
          className={`d-flex align-items-start ${i < checks.length - 1 ? "mb-2" : ""}`}
        >
          <span className="me-2" style={{ opacity: "0.8" }}>
            ✓
          </span>
          <small style={{ opacity: "0.9" }}>{check}</small>
        </div>
      ))}
    </div>
  </div>
);

const IndustryGrid = ({ industries, show }) => {
  if (!show) return null;

  return (
    <div className="wow fadeIn" data-wow-duration="1s">
      <div className="row g-4">
        {industries.map((industry, i) => (
          <IndustryCard
            key={i}
            title={industry.title}
            description={industry.description}
            checks={industry.checks}
            delay={`${0.4 + i * 0.1}s`}
          />
        ))}
      </div>
    </div>
  );
};

export { IndustryGrid, IndustryCard };
export default IndustryGrid;
