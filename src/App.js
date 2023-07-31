import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import CryptoHome from './components/cryptoHome';
import Details from './components/Details';

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <NavBar />
              <CryptoHome />
            </>
        )}
        />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </main>
  );
}

export default App;
