import { createContext, useState } from "react";

const CotizadorContext = createContext();

// Provider, lugar donde defines tu state, aqui nacen los datos
const CotizadorProvider = ({children}) => {

  const [modal, setModal] = useState(false);

  const cambiarState = () => {
    setModal(!modal);
  }

  return(
    <CotizadorContext.Provider
      value={{ 
        modal,
        cambiarState 
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