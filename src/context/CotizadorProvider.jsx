import { createContext } from "react";

const CotizadorContext = createContext();

// Provider, lugar donde defines tu state, aqui nacen los datos
const CotizadorProvider = ({children}) => {
  return(
    <CotizadorContext.Provider
      value={{ }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext;