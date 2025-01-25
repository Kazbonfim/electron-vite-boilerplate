import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode, Suspense } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Efeito de suspense para carregamento das páginas, só aplicar como embaixo:
// const Home = React.lazy(() => '/');
const Home = React.lazy(() => './pages/Home.jsx');


// Componente de Loading
const Loading = () => (
  <div className="container text-center loading-container">
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Carregando...</span>
    </div>
    <p className="text-light mt-3">Carregando...</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )
      },
      // Exemplo de uso, para definir efeito de carregamento + páginas das rotas
      // {
      //   path: "/",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Home />
      //     </Suspense>
      //   )
      // },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
