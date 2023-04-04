import { useState } from "react"
import closeStroke from '../../assets/svg/d2/Close_stroke.svg'
import d3 from '../../assets/svg/d2/360.svg'
import sofaG from '../../assets/img/d2/sofa.gif'
import sofaP from '../../assets/img/d2/sofa.png'

export function ProductCard () {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className=" flex bg-[#D9CDF7] text-[#271A45] min-h-screen items-center justify-center gap-9 max-md:flex-col">
      <div className="relative">
        <img
          id="toggle"
          src={isOpen ? closeStroke : d3}
          className=" absolute top-0 right-12 cursor-pointer"
          alt="clique neste butão para animar o sofa"
          onClick={()=>setIsOpen(!isOpen)}
        />
        <img
          id="produto"
          src={isOpen ? sofaG : sofaP}
          alt="sofa"
          className="w-[449px] h-[222px] object-contain"
        />
      </div>
      <div className="right">
        <div className="flex flex-col gap-3">
          <h4 className="font-light">CÓDIGO: 42404
          </h4>
          <h1 className="font-['Crimson Pro',_serif] fon font-semibold text-[32px]">
            Sofá Margot II - Rosé
          </h1>
          <p className="opacity-[0.67]">
            R$ 4.000
          </p>
        </div>
        <button className="border border-[#271A45] rounded-full px-4 py-2 mt-5">ADICIONAR Á CESTA</button>
      </div>
    </div>
  )
}