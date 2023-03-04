import {
  Link
} from "react-router-dom";

export const DesafioCard = ({ url, title, description }) => {
  return (

    <div className="h-fit w-[300px] bg-[#0F0B16] transition-all hover:scale-[1.1] rounded p-3 my-4 relative shadow-md shadow-slate-700 hover:shadow-slate-300">
      <img src={`/img/Thumbnail${url}.png`} alt={title} className="w-full h-[200px] object-contain" />
      <h1 className="text-center text-2xl font-medium py-1 ">{title}</h1>
      <p className="flex-1 h-full w-full pt-2 pb-14">{description}</p>
      <div className="absolute bottom-[4%] left-[50%] translate-x-[-50%] flex gap-3 w-full px-2">
        <Link to={`desafio/${url}`} className="bg-purple-700 py-2 px-3 flex justify-center items-center rounded-lg w-full">
          Site
        </Link>
      </div>

    </div>
  )
}