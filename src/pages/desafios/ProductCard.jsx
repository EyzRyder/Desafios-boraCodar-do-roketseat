import { useState } from "react"

export const ProductCard = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex bg-[#D9CDF7] text-[#271A45] min-h-screen items-center justify-center gap-9 max-md:flex-col">
      <div class="relative">
        <img
          id="toggle"
          src={"/public/svg/d2/" + (isOpen ? "Close_stroke.svg" :"360.svg")}
          class=" absolute top-0 right-12 cursor-pointer"
          alt="clique neste butão para animar o sofa"
          onClick={()=>setIsOpen(!isOpen)}
        />
        <img
          id="produto"
          src={"/public/img/d2/" + (isOpen ? "sofa.gif" : "sofa.png")}
          alt="sofa"
          className="w-[449px] h-[222px] object-contain"
        />
      </div>
      <div class="right">
        <div class="flex flex-col gap-3">
          <h4 class="font-light">CÓDIGO: 42404
          </h4>
          <h1 class="font-['Crimson Pro',_serif] fon font-semibold text-[32px]">
            Sofá Margot II - Rosé
          </h1>
          <p class="opacity-[0.67]">
            R$ 4.000
          </p>
        </div>
        <button class="border border-[#271A45] rounded-full px-4 py-2 mt-5">ADICIONAR Á CESTA</button>
      </div>
    </div>
  )
}