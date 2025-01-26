import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Substituído createBrowserRouter por HashRouter
import { StrictMode, Suspense } from 'react';
import React from 'react';
import App from './App';

// Efeito de suspense para carregamento das páginas
const Home = React.lazy(() => import('./pages/Home.jsx')); // Corrigido o caminho e usando import()

// Componente de Loading
const Loading = () => (
  <div className="container text-center loading-container">
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Carregando...</span>
    </div>
    <p className="text-light mt-3">Carregando...</p>
  </div>
);

// Configuração das rotas com HashRouter
function RouterConfig() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index // Rota padrão (equivalente a path="/")
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          {/* Exemplo de outras rotas */}
          {/* <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

// Renderização da aplicação
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
);
