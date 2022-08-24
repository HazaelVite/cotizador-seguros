import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatoDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

// Provider, lugar donde defines tu state, aqui nacen los datos
const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })
  const [error, setError] = useState('')
  const [resultado, setResultado] = useState(0)

  const handleChangeDatos = e => {
    setDatos({
      // Tomar una copia y reescribir la propiedad automaticamente con la seleccion
      ...datos,
      [e.target.name]: e.target.value,
    })

  }

  const cotizarSeguro = () => {
    // Una base
    let resultado = 2000;
    // Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year)
    // Hay que restar el 3% por cada año
    resultado -= ((diferencia * 3) * resultado) / 100;
    // Americano 15%, Europeo 30%, Asiatico 5%
    resultado *= calcularMarca(datos.marca)
    // Plan basico 20%, completo 50%
    resultado *= calcularPlan(datos.plan)
    // Formatear dinero
    resultado = formatoDinero(resultado)
    setResultado(resultado)
  }

  return(
    <CotizadorContext.Provider
      value={{ 
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext;