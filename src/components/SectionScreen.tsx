import { Link } from 'react-router-dom';
import spot from '../assets/tvspot.mp4';

const SectionScreen = () => {
  return (
    <section className="main__screen">
      <video className="main__screen--video" autoPlay muted loop>
        <source src={spot} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main__screen--block">
        <p className="main__screen--block-info">2023 M 2h 30m</p>
        <h1 className="main__screen--block-title">Spider man: Across the spider verse</h1>
        <h2 className="main__screen--block-subtitle">Action | Adventure | Fantasy</h2>
        <p className="main__screen--block-rating">⭐ 9.03</p>
        <Link to="/show/1" className="main__screen--block-btn">
          Watch Now
        </Link>
      </div>
    </section>
  );
};

export default SectionScreen;
