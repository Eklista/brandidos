import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './modules/public/components/layout/PublicLayout';
import TailwindDebug from './modules/public/views/HomePage';

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
    console.log(`

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒█████████▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒█████▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒███▒██▒▒▒▒▒▒██▒▒████▒▒▒███▒▒▒██▒▒▒▒▒█▒▒█████▒▒▒▒▒█▒▒████▒▒▒▒▒▒▒███▒▒▒███████▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒█▒▒▒▒██▒▒▒████████████▒████▒▒███▒▒▒▒██▒██▒▒███▒▒▒█▒▒██▒███▒▒▒█████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████▓▒▒▒██▒▒▒▒██▒██▓██▒████▒▒▒██▒▒█▒▒▒▒███▒█▓▒██▒▒▒█████▒▒▒▒███▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒██████████▓█▒▒███▒▒█▒▒███▒█▒███▒▒█▒▒█▒▒▒▒▒▒████▒██▒▒▒▒▒██▒▒▒▒▒▒█▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒█████▒▒▒██████████▒▒██▒██▒██▒▒▒▒▒████▒██▒▒▒▒▒██▒▒▒▒▒██▒▒▒▒████▒▒▒█▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒███████████▒▒▒▒████▒▒▒████▒██▒▒▒███▒██▒██▒▒▒████▒▒▒▒████▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒███▓▒▒██▒▒▒▒███▒▒▒▒███▒▒▒▒███▒█████▒▒▒▒██▒▒█████▒▒████████▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒████████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒████████████▒▒▒▒█▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████████████████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████████▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
    ¡Hola bandido! 🤠
    Bienvenido a Brandidos - Donde las ideas se vuelven leyenda
    `);

    // Simular carga inicial
    setTimeout(() => {
      setState(prev => ({ ...prev, isLoading: false }));
    }, 1000);
  }, []);

  const toggleMask = (): void => {
    setState(prev => ({ ...prev, showMask: !prev.showMask }));
  };

  if (state.isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-white text-xl font-semibold">Cargando Brandidos...</h2>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <PublicLayout>
              <TailwindDebug />
            </PublicLayout>
          } />
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