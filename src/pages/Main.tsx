import Header from '../components/Header';
import SectionScreen from '../components/SectionScreen';
import SectionPopular from '../components/SectionPopular';
import SectionCarausel from '../components/SectionCarausel';
import SectionTvCarausel from '../components/SectionTvCarausel';
import Footer from '../components/Footer';

const Main: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <SectionScreen />
        <SectionPopular />
        <SectionCarausel />
        <SectionTvCarausel />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
