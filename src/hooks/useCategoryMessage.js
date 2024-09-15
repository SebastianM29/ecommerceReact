import { useMemo } from "react"


export const useCategoryMessage = (category) => {
    const categoryMessage = useMemo(() => {

        switch (category) {
            case "madera":
              return "Descubre nuestros diseños únicos y personalizados, creados con precisión en router CNC para resultados excepcionales.";
          
            case "laser":
              return "Explora nuestras creaciones exclusivas y a medida, realizadas con tecnología láser para una precisión impecable.";
          
            case "cPersonal":
              return "Nos preocupamos por tu bienestar personal. ¡Visita nuestro catálogo para encontrar lo que necesitas!";
          
            case "textil":
              return "Mantente a la moda con nuestras últimas colecciones textiles, siempre con estilo y frescura.";
          
            default:
              return "Explora nuestra amplia gama de productos y encuentra lo que estás buscando.";
          }


    },[category])


  return  categoryMessage
    
  
}
