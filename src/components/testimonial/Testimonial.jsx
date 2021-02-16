function Testimonial({ img, name, position, desc }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="team-item">
        <div className="team-content">
          <i>
            <img src={img} alt="" />
          </i>
          <p>{desc}</p>
          <div className="user-image">
            <img src="http://placehold.it/60x60" alt="" />
          </div>
          <div className="team-info">
            <h3 className="user-name">{name}</h3>
            <span>{position}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
