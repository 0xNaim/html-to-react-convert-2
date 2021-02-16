import futureItem from "../../assets/images/featured-item-01.png";
import Service from "./Service";

function OurServices() {
  return (
    <section className="home-feature padding-top-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <Service
                header="Modern Strategy"
                img={futureItem}
                desc="Customize anything in this template to fit your website needs"
              />
              <Service
                header="Best Relationship"
                img={futureItem}
                desc="Contact us immediately if you have a question in mind"
              />
              <Service
                header="Unlimited Marketing"
                img={futureItem}
                desc="You just need to tell your friends about our free templates"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
