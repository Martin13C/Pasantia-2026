import React from 'react'
import { useLocation } from 'react-router';
import AppRoutes from './router/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import ButtonTop from './components/ButtonTop';

function App() {


  const location = useLocation();

  // Definimos exactamente en qué rutas QUEREMOS que aparezca el footer
  const rutasConFooter = ['/', '/nosotros', '/puntosnodos', '/cursos'];

  // Comprobamos si la ruta actual está en nuestra lista
  const mostrarFooter = rutasConFooter.includes(location.pathname);


  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>

      {mostrarFooter && <Footer />}

      <ButtonTop />

    </>
  )
}

export default App