import Work from "./Work";

function WorkProcess() {
  return (
    <section className="mini" id="work-process">
      <div className="mini-content">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="info">
                <h1>Work Process</h1>
                <p>
                  Aenean nec tempor metus. Maecenas ligula dolor, commodo in
                  imperdiet interdum, vehicula ut ex. Donec ante diam.
                </p>
              </div>
            </div>
          </div>

          {/* Mini Box Start  */}
          <div className="row">
            <Work />
            <Work />
            <Work />
            <Work />
            <Work />
            <Work />
          </div>
          {/* Mini Box End  */}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
