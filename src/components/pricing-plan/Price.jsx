function Price({
  name,
  period,
  price,
  extra,
  minute,
  space,
  transfer,
  active,
}) {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12"
      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
    >
      <div className={active ? 'pricing-item active' : 'pricing-item'}>
        <div className="pricing-header">
          <h3 className="pricing-title">{name}</h3>
        </div>
        <div className="pricing-body">
          <div className="price-wrapper">
            <span className="currency">$</span>
            <span className="price">{price}</span>
            <span className="period">{period}</span>
          </div>
          <ul className="list">
            <li className="active">{space} GB space</li>
            <li className="active">{transfer} GB transfer</li>
            <li className="active">Pro Design Panel</li>
            <li className={(extra ? "" : "active", minute ? "active" : "")}>
              15-minute support
            </li>
            <li className={extra ? "active" : ""}>Unlimited Emails</li>
            <li className={extra ? "active" : ""}>24/7 Security</li>
          </ul>
        </div>
        <div className="pricing-footer">
          <a href="#" className="main-button">
            Purchase Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Price;
