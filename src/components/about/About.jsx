function About({ img, header, desc }) {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-md-12 col-sm-12 align-self-center"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <img
              src={img}
              className="rounded img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
            <div className="left-heading">
              <h2 className="section-title">{header}</h2>
            </div>
            <div className="left-text">
              <p>{desc}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
