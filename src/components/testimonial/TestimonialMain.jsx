import testimonialIcon from "../../assets/images/testimonial-icon.png";
import Testimonial from "./Testimonial";

function TesimonialMain() {
  return (
    <section className="section container" id="testimonials">
      {/* Section Title Start */}
      <div className="row">
        <div className="col-lg-12">
          <div className="center-heading">
            <h2 className="section-title">What do they say?</h2>
          </div>
        </div>
        <div className="offset-lg-3 col-lg-6">
          <div className="center-text">
            <p>
              Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
              nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.
            </p>
          </div>
        </div>
      </div>
      {/* Section Title End  */}

      <div className="row">
        <Testimonial
          img={testimonialIcon}
          name="Kelvin Wood"
          position="Digital Marketer"
          desc="Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie."
        />

        <Testimonial
          img={testimonialIcon}
          name="David Martin"
          position="Website Manager"
          desc="Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam."
        />

        <Testimonial
          img={testimonialIcon}
          name="Catherine Soft"
          position="Managing Director"
          desc="Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio."
        />
      </div>
    </section>
  );
}

export default TesimonialMain;
