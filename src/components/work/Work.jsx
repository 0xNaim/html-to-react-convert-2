import workProcess from "../../assets/images/work-process-item-01.png";

function Work() {
  return (
    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
      <a href="#" className="mini-box">
        <i>
          <img src={workProcess} alt="" />
        </i>
        <strong>Get Ideas</strong>
        <span>Godard pabst prism fam cliche.</span>
      </a>
    </div>
  );
}

export default Work;
