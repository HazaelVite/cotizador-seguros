import { MARCAS, PLANES, YEARS } from "../constants"
import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"

export const Formulario = () => {
  const { datos, handleChangeDatos } = useCotizador()

  return (
    <>
      <form action="">
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200 rounded"
            onChange={e => handleChangeDatos(e)}
            value={datos.marca}
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
            className="w-full p-3 bg-white border border-gray-200 rounded"
            onChange={e => handleChangeDatos(e)}
            value={datos.year}
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
                <input type="radio" name="plan" value={plan.id} onChange={e => handleChangeDatos(e)} />
                <label>{plan.nombre}</label>
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
