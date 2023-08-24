import Footer from '../components/Footer';
import Header from '../components/Header';
import SmallElement from '../components/SmallElement';

const Show = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <section className="main__show">
          <img
            src="https://i0.wp.com/halcyonrealms.com/blogpics/spidyv2posters06.jpg?resize=750%2C500&ssl=1"
            alt=""
            className="main__show--img"
          />
          <div className="main__show--block">
            <div className="main__show--block-left">
              <p className="main__show--block-left--subinfo">2023 M 2h 30m</p>
              <h1 className="main__show--block-left--title">Spider man: Across the spider verse</h1>
              <div className="main__show--block-left--subtitle">Action | Adventure | Fantasy</div>
              <p className="main__show--block-left--rating">⭐ 9.03</p>
              <p className="main__show--block-left--description">
                After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood
                Spider-Man is catapulted across the Multiverse, where he encounters the Spider
                Society, a team of Spider-People charged with protecting the Multiverse’s very
                existence. But when the heroes clash on how to handle a new threat, Miles finds
                himself pitted against the other Spiders and must set out on his own to save those
                he loves most.
              </p>
              <p className="main__show--block-left--studio">
                <span className="main__show--block-left--studio-span">STUDIO:</span> Columbia
                Pictures , Sony Pictures Animation , Lord Miller , Pascal Pictures , Arad
                Productions
              </p>
              <button className="main__show--block-left--btn">Watch</button>
            </div>
            <div className="main__show--block-right">
              <div className="main__show--block-right--title">Cast</div>
              <div className="main__show--block-right--block">
                <div className="actor">
                  <img src="" alt="" className="actor--img" />
                  <div className="actor--block">
                    <div className="actor--block-name">John Crammer</div>
                    <div className="actor--block-subinfo">voice</div>
                  </div>
                </div>
                <div className="actor">
                  <img src="" alt="" className="actor--img" />
                  <div className="actor--block">
                    <div className="actor--block-name">John Crammer</div>
                    <div className="actor--block-subinfo">voice</div>
                  </div>
                </div>
                <div className="actor">
                  <img src="" alt="" className="actor--img" />
                  <div className="actor--block">
                    <div className="actor--block-name">John Crammer</div>
                    <div className="actor--block-subinfo">voice</div>
                  </div>
                </div>
                <div className="actor">
                  <img src="" alt="" className="actor--img" />
                  <div className="actor--block">
                    <div className="actor--block-name">John Crammer</div>
                    <div className="actor--block-subinfo">voice</div>
                  </div>
                </div>
                <div className="actor">
                  <img src="" alt="" className="actor--img" />
                  <div className="actor--block">
                    <div className="actor--block-name">John Crammer</div>
                    <div className="actor--block-subinfo">voice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main__recomendation">
          <h2 className="main__recomendation--title">You May Also Like</h2>
          <div className="main__recomendation--block">
            <SmallElement />
            <SmallElement />
            <SmallElement />
            <SmallElement />
            <SmallElement />
            <SmallElement />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Show;
