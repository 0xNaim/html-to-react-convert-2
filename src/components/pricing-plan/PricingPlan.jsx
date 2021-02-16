import Price from "./Price";

function PricingPlan() {
  return (
    <section className="section colored" id="pricing-plans">
      <div className="container">
        {/* Section Title Start  */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Pricing Plans</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                quis arcu elementum, quis congue risus volutpat.
              </p>
            </div>
          </div>
        </div>
        {/* Section Title End  */}

        <div className="row">
          {/* Pricing Item Start  */}
          <Price
            name="Stater"
            period="monthly"
            price="14.50"
            space="60"
            transfer="600"
          />
          <Price
            name="Premium"
            period="monthly"
            price="21.50"
            minute
            space="120"
            transfer="1200"
            active
          />
          <Price
            name="Advance"
            period="monthly"
            price="42.00"
            extra
            minute
            space="250"
            transfer="5000"
          />
        </div>
      </div>
    </section>
  );
}

export default PricingPlan;
