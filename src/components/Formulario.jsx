import { MARCAS, PLANES, YEARS } from "../constants"
import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"

export const Formulario = () => {

  const { modal, cambiarState } = useCotizador()
  
  return (
    <>
      <button 
        onClick={ cambiarState }
      >
        Cambiar modal de Context
      </button>
      <form action="">
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
          <select
            name="marca"
            id=""
            className="w-full p-3 bg-white border border-gray-200 rounded"
          >
            <option value="">--- Selecciona Marca ---</option>
            {MARCAS.map(marca => (
              <option
                key={marca.id}
                value={marca.id}
              >
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
          <select
            name="year"
            id=""
            className="w-full p-3 bg-white border border-gray-200 rounded"
          >
            <option value="">--- Selecciona Año ---</option>
            {YEARS.map(year => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Elige un plan</label>
          <div className="flex gap-3 items-center">
            {PLANES.map(plan => (
              <Fragment key={plan.id}>
                <input type="radio" name="" value={plan.id} />
                <label htmlFor="">{plan.nombre}</label>
              </Fragment>
            ))}
          </div>
        </div>

        <input 
        type="submit" 
        value="cotizar" 
        className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 
                  rounded uppercase font-bold" 
        />
      </form>
    </>
  )
}
