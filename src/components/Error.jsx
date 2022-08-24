import useCotizador from "../hooks/useCotizador"

export const Error = () => {

  const { error } = useCotizador()
  return (
    <div className="border text-center text-red-700 border-red-400 bg-red-100 py-3 rounded">
      { error }
    </div>
  )
}
