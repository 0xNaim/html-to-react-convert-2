import blogItemOne from "../../assets/images/blog-item-01.png";
import blogItemTwo from "../../assets/images/blog-item-02.png";
import blogItemThree from "../../assets/images/blog-item-03.png";
import Blog from "./Blog";

function OurBlog() {
  return (
    <section className="section container" id="blog">
      {/* Section Title Start  */}
      <div className="row">
        <div className="col-lg-12">
          <div className="center-heading">
            <h2 className="section-title">Blog Entries</h2>
          </div>
        </div>
        <div className="offset-lg-3 col-lg-6">
          <div className="center-text">
            <p>
              Integer molestie aliquam gravida. Nullam nec arcu finibus,
              imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
              molestie.
            </p>
          </div>
        </div>
      </div>
      {/* Section Title End  */}

      <div className="row">
        <Blog
          img={blogItemOne}
          title="Vivamus ac vehicula dui"
          desc="Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
            Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas
            augue."
        />

        <Blog
          img={blogItemTwo}
          title="Phasellus convallis augue"
          desc="Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis."
        />

        <Blog
          img={blogItemThree}
          title="Nam gravida purus non"
          desc="Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu."
        />
      </div>
    </section>
  );
}

export default OurBlog;
