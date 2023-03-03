
import { AirplaneTilt } from "phosphor-react";

export const CartãoDeViagem = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#8257E5] justify-center items-center ">
      <div className="flex flex-col gap-5 items-center justify-center w-[327px]">
        <h1 className="text-white text-xl font-medium">Cartão de embarque</h1>
        <div className="w-full">

          <div
            className="bg-white rounded-tr-3xl rounded-tl-3xl max-sm:rounded-br-3xl max-sm:rounded-bl-3xl px-8 py-6 flex flex-col gap-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm">Voo</p>
                <p className="font-bold">R$995</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Data</p>
                <p className="font-bold">23/05/2023</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Sao Paulo, Brasil</p>
                <p className="text-[40px] font-medium">GRU</p>
                <p>17:00</p>
              </div>
              <AirplaneTilt size={32} />

              <div className="text-right">
                <p className="text-sm text-gray-500">Sao Francisco, EUA</p>
                <p className="text-[40px] font-medium">SFO</p>
                <p>04:48+1</p>

              </div>
            </div>
          </div>


          <div
            className="relative bg-white  max-sm:rounded-tr-3xl max-sm:rounded-tl-3xl max-sm:rounded-br-3xl max-sm:rounded-bl-3xl  px-8 py-6 flex flex-col gap-6  border-b border-t border-gray-400 border-dashed">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">Passageiro</p>
                <p className="font-medium">Gabriel Bessi</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">Assento</p>
                <p className="font-medium">28A</p>
              </div>
            </div>
            <div className="w-6 h-6 absolute top-[-13%] left-[-4%] bg-[#8257E5] rounded-full max-sm:hidden"> </div>
            <div className="w-6 h-6 absolute top-[-13%] right-[-4%] bg-[#8257E5] rounded-full max-sm:hidden"> </div>
            <div className="w-6 h-6 absolute bottom-[-13%] left-[-4%] bg-[#8257E5] rounded-full max-sm:hidden"> </div>
            <div className="w-6 h-6 absolute bottom-[-13%] right-[-4%] bg-[#8257E5] rounded-full max-sm:hidden"> </div>
          </div>


          <div
            className="bg-white max-sm:rounded-tr-3xl max-sm:rounded-tl-3xl rounded-br-3xl rounded-bl-3xl px-8 py-6 flex flex-col gap-6">

            <div className="flex flex-col gap-6 justify-between">
              <div className="flex gap-2 justify-between">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Embarque</p>
                    <div className="bg-[#633BBC] w-fit px-2 py-1 rounded-lg text-white font-medium">16:15</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Terminal</p>
                    <p className=" font-medium">2</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Portão</p>
                    <p className=" font-medium">15</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fbessiportfolio.vercel.app&chs=180x180&choe=UTF-8&chld=L|2"
                    alt="qr code" />
                  <p className="text-center">Grupo de embarque: 3</p>
                </div>
              </div>

              <p className="text-center"> <strong>Atenção:</strong> o portão fecha 16:45</p>
            </div>

          </div>

        </div>
        <p className="text-white text-sm text-center">Qualquer problema procure o balcão de atendimento da sua companhia
          aérea</p>
      </div>
    </div>
  )
}