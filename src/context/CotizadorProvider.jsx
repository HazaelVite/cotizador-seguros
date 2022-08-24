import { createContext, useState } from "react";

const CotizadorContext = createContext();

// Provider, lugar donde defines tu state, aqui nacen los datos
const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const handleChangeDatos = e => {
    setDatos({
      // Tomar una copia y reescribir la propiedad automaticamente con la seleccion
      ...datos,
      [e.target.name]: e.target.value,
    })

  }

  return(
    <CotizadorContext.Provider
      value={{ 
        datos,
        handleChangeDatos
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