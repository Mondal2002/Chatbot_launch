// ─── Reusable Component ───────────────────────────────────────────────────────

const FeatureBox = ({
  title,
  description,
  image,
  bgClass = "",
  animationIn = "fadeInUp",
  delay = "0.5s",
}) => (
  <div
    className={`col-lg-4 col-md-6 all_column wow ${animationIn} bottom-space`}
    data-wow-duration="2s"
    data-wow-delay={delay}
  >
    <div
      className={`feature-box position-relative all_boxes feature-card h-100  ${bgClass}`}
    >
      <h3 className="bit-to-right">{title}</h3>
      <p className="mb-0 bit-to-right top-space-amazing-features-section">
        {description}
      </p>
      <figure>
        <img
          src={image}
          alt={title}
          className="img-fluid wow fadeInDown image-wrapper"
          data-wow-duration="2s"
          data-wow-delay={delay}
        />
      </figure>
    </div>
  </div>
);

const AmazingFeatures = ({ features }) => (
  <section
    className="float-left w-100 amazing-features-con position-relative padding-top padding-bottom main-box"
    id="Features"
  >
    <div
      className="container wow fadeInUp"
      data-wow-duration="2s"
      data-wow-delay="0.2s"
    >
      <div className="heading-title-con text-center">
        <h5 className="text content-font text-blue top-space-more bottom-space">
          Amazing Features
        </h5>
        <h1
          className="wow fadeInRights"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
        >
          AI That Answers, Assists & Automates <br /> Your Calls
        </h1>
      </div>

      <div>
        <div
          className="row all_row wow fadeIn center-all align-items-stretch"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          {features.map((feature, i) => (
            <FeatureBox
              key={i}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              bgClass={feature.bgClass || ""}
              animationIn={feature.animationIn || "fadeInUp"}
              delay={`${0.5 + i * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { AmazingFeatures, FeatureBox };
export default AmazingFeatures;
