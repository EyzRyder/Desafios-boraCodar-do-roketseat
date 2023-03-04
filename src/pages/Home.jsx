import { DesafioCard } from "../components/DesafioCard"
import { data } from "../data"

export const Home = () => {
  return (
    <div className="bg-[#15121E] min-h-screen text-white">
      <h1 className="text-4xl p-5 font-bold w-full  text-center">#boraCodar um desafio toda semana
      </h1>
      <div className="flex flex-wrap w-[calc(100%-4em)] justify-center items-center mx-8 gap-7">
      {data.map(card => {
        return (
          <DesafioCard url={card.url} description={ card.description} title={card.title} key={card.url} />
      )})}
      </div>
    </div>
  )
}
