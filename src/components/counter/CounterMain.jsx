import Counter from "./Counter";

function CounterMain() {
  return (
    <section className="counter">
      <div className="content container">
        <div className="row">
          <Counter count="126" name="Projects" />
          <Counter count="63" name="Happy Client" />
          <Counter count="18" name="Awards Wins" />
          <Counter count="27" name="Countries" />
        </div>
      </div>
    </section>
  );
}

export default CounterMain;
