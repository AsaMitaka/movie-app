import Header from '../components/Header';
import SectionScreen from '../components/SectionScreen';
import SectionPopular from '../components/SectionPopular';
import SectionCarausel from '../components/SectionCarausel';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <SectionScreen />
        <SectionPopular />
        <SectionCarausel />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
