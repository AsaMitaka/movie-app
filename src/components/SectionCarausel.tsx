import SmallElement from './SmallElement';

const SectionCarausel = () => {
  return (
    <section className="main__section--carausel">
      <h1 className="main__section--carausel-title">The Top Trending</h1>
      <div className="main__section--carausel-block">
        <SmallElement />
        <SmallElement />
        <SmallElement />
        <SmallElement />
        <SmallElement />
        <SmallElement />
        <SmallElement />
        <SmallElement />
        <SmallElement />
      </div>
    </section>
  );
};

export default SectionCarausel;
