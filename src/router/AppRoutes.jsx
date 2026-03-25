import { Route, Routes } from "react-router"
import Nosotros from "../pages/Nosotros"
import PyN from "../pages/PyN"
import Cursos from "../pages/Cursos"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/puntosnodos" element={<PyN />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes

