function Counter({ count, name }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="count-item decoration-bottom">
        <strong>{count}</strong>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Counter;
