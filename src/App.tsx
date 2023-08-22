import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Movie from './pages/Movies';
import Tvseries from './pages/Tvseries';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movie />} />
      <Route path="/series" element={<Tvseries />} />
    </Routes>
  );
};

export default App;
