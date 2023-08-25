import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MovieShow from './pages/MovieShow';
import TvShow from './pages/TvShow';
import Shows from './pages/Shows';
import Movies from './pages/Movies';
import Error from './pages/Error';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/show" element={<Shows />} />
      <Route path="/show/:id" element={<TvShow />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieShow />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
