import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import WatchList from './components/WatchList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>

        <Routes>
          <Route path='/'
            element={
              <>
                <Banner />
                <Movies />
              </>
            }>
          </Route>

          <Route path='/watchlist' element={<WatchList />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
