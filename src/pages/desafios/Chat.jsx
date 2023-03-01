import { Desafio4ContactBubble } from "../../components/Desafio4ContactBuble"
import { Desafio4YourBubble } from "../../components/Desafio4YourBuble"

export const Chat = () => {
  return (
    <div className="bg-[#1A1924] text-white min-h-screen px-[72px] py-8 flex flex-col max-sm:py-6 max-sm:px-8">
      <header className="flex w-full h-12 justify-center items-center">
        <img
          src="https://avatars.githubusercontent.com/u/85580011?v=4"
          alt="contact profile picture"
          className="rounded-full object-cover h-12 w-12"

        />
        <div className="flex flex-col px-4 flex-1">
          <h4 className="font-bold text-base text-[#e1e1e6]">Gabriel Bessi</h4>
          <div className="flex items-center gap-1 text-[#00B37E]">
            <div className="w-2 h-2 bg-[#00B37E] rounded-full"></div>
            <p>Online</p>
          </div>
        </div>
        <img src="/public/svg/d4/close.svg" alt="close icon" className=" w-5 h-5" />
      </header>

      <main className="flex-1">
        <p className="flex justify-center pt-[14px] max-sm:pt-6">Hoje 11:30</p>

        <div className="flex flex-col mt-[30px] gap-[30px]">
          <Desafio4ContactBubble user={"Gabriel Bessi"} time={"11:30"} msg={"Tive uma ideia incrível para um projeto!!"} />

          <Desafio4YourBubble time={"11:32"} msg={"Serio? manda ai"} />

          <Desafio4ContactBubble user={"Gabriel Bessi"} time={"11:34"} msg={"E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"} />
          
          <Desafio4YourBubble time={"11:36"} msg={"#boraCodar! 🚀"} />
        </div>

      </main>

      <div className="mt-3 bg-[#282843] px-6 py-[14px] flex rounded-full items-center">
        <input className="bg-transparent border-none outline-none flex-1 mr-[10px]" type="text" placeholder="Digite sua mensagem" />
        <button>
          <img src="/public/svg/d4/send.svg" alt="send icon button" />
        </button>
      </div>
    </div>
  )
}