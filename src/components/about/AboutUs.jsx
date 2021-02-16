import leftImg from "../../assets/images/left-image.png";
import rightImg from "../../assets/images/right-image.png";
import About from "./About";

function AboutUs() {
  return (
    <>
      <About
        img={leftImg}
        header="Let’s discuss about you project"
        desc="Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper."
      />

      {/* Features Big Item Start  */}
      <section className="padding-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
              <div className="left-heading">
                <h2 className="section-title">
                  We can help you to grow your business
                </h2>
              </div>
              <div className="left-text">
                <p>
                  Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
                  nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
                  luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam
                  quis dolor elit.
                </p>
              </div>
            </div>
            <div className="col-lg-1" />
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src={rightImg}
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
