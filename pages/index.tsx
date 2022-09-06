import type { NextPage } from 'next';
import { useRouter } from 'next/router'



const Home: NextPage = () => {
  const router = useRouter()
  const { submissionID } = router.query
  const stamp = new Date(Date.now()).toLocaleString()

  return (
    <div className="bg-gray-50 w-full h-screen flex items-center">
        <div className="m-auto pb-10">
          <div className="px-4 lg:px-11 my-6">
            <img src="/logo.png" className="w-28 h-28 rounded-full bg-blue-600 object-cover"></img>
          </div>
          <div className="px-4 lg:px-11">
            <p className="font-bold text-3xl">Gracias por diligenciar la información del formulario</p>
            <p className="py-1">Un asesor especializado se contactará contigo para brindarte más información</p>
          </div>
          <p className="text-sm m-auto text-center pt-10">Radicado Número</p>
          <div className="px-3 py-2 bg-blue-100 rounded-lg w-40 lg:w-52 text-center m-auto">
            <p className="font-bold m-auto text-2xl lg:text-4xl">{submissionID}</p> 
          </div>
          <div className="m-auto text-center py-1">
             <p>{stamp}</p>
          </div>
        </div>
    </div>
  )
}

export default Home
