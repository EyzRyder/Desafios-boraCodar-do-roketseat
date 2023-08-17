import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="bg-[#000013] text-slate-50 min-h-screen">
      <nav className="flex justify-between px-8 py-4 items-center ">
        <div className="flex gap-4 justify-center items-center">
          <span><Logo/> </span>
          <span>Mega Bora Codar</span>
        </div>
        <div className="bg-slate-200 text-slate-800 flex justify-start items-center px-2 py-2 rounded-xl gap-4">
          <span className="h-8 w-8 bg-slate-700 rounded"> </span>
          <div>
            <h3>Guest</h3>
            <p>guest@exemple.com</p>
          </div>
        </div>
      </nav>
      <section className="grid grid-cols-3 place-content-center px-14">
        <div className="flex flex-col gap-6">
          <h1 className="flex flex-col text-4xl font-bold">
          <span>Bem Vindo ao</span>
          <span>Mega Bora Codar</span>
          </h1>
          <p>
            Aqui é uma coleção de desafios de Bora codar do Rocketseat, Tentei juntar todos os desafios de uma maneira que alguns intaragem com os outros
          </p>
      </div>
      <div className="col-span-2">A</div>
      </section>
      <section>
        <div>Github</div>
        <div>
        <article>
            <h2>Ai</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nisi explicabo perspiciatis minus in, eaque, cum fugiat eos recusandae eligendi asperiores voluptates accusamus iure suscipit illo, ducimus repellendus quisquam est!</p>
        </article>
        </div>
      </section>
</main>
  )
}
