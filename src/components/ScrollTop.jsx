import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollTop() {

  const { pathname, hash } = useLocation()

  useEffect(() => {

    if (hash) {

      const element = document.querySelector(hash)

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }, 50)
      }

    } else {

      // SIN animación cuando cambia de página
      window.scrollTo(0, 0)

    }

  }, [pathname, hash])

  return null
}

export default ScrollTop