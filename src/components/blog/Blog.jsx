function Blog({ img, title, desc }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="blog-post-thumb">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="blog-content">
          <h3>
            <a href="#">{title}</a>
          </h3>
          <div className="text">{desc}</div>
          <a href="#" className="main-button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
