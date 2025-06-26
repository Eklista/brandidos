import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StreetLoadingScreen } from './components/ui/StreetSpinner';
import HomePage from './modules/public/views/HomePage';
import LoginPage from './modules/public/views/LoginPage';
import { brandidosAsciiArt } from './assets/brandidosArt';

interface BrandidosState {
  showMask: boolean;
  isLoading: boolean;
}

const App = () => {
  const [state, setState] = useState<BrandidosState>({
    showMask: false,
    isLoading: true
  });

  useEffect(() => {
    console.log(brandidosAsciiArt);

    // Simular carga inicial
    setTimeout(() => {
      setState(prev => ({ ...prev, isLoading: false }));
    }, 1000);
  }, []);

  const toggleMask = (): void => {
    setState(prev => ({ ...prev, showMask: !prev.showMask }));
  };

  if (state.isLoading) {
    return <StreetLoadingScreen background="dark" />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {/* Easter Egg - Máscara secreta */}
        {state.showMask && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={toggleMask}
          >
            <div className="text-center text-white p-8">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-2">¡Has encontrado la máscara secreta!</h3>
              <p className="text-white/60">Los verdaderos bandidos siempre encuentran los secretos...</p>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;