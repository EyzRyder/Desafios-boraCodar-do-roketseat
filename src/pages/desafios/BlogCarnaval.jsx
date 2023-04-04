import "./BlogCarnaval.scss"
import blog1 from '../../assets/img/d7/01.jpeg'
import blog2 from '../../assets/img/d7/02.jpeg'
import blog3 from '../../assets/img/d7/03.jpeg'

export function BlogCarnaval () {

  const blogs = [
    {
      img: blog1,
      title: "O Python do vovô não sobe mais",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      local:"São Paulo - SP"
    },
    {
      img: blog2,
      title: "Todo mundo null",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      local:"Salvador - BA"
    },
    {
      img: blog3,
      title: "Hoje dou exception",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      local:"Rio de Janeiro - RJ"
    },
    {
      img: blog1,
      title: "O Python do vovô não sobe mais",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      local: "São Paulo - SP"
    },
    {
      img: blog2,
      title: "Todo mundo null",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      local: "Salvador - BA"
    },
    {
      img: blog3,
      title: "Hoje dou exception",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      local: "Rio de Janeiro - RJ"
    },
  ];
  return (
    <div className="blogCarnaval">
      <header>
        <div className="content">
          <div className="top">
            <p>find your block</p>
            <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
          </div>

          <form className="search">
            <div className="search-field">
              <label className="sr-only" for="name">Pesquise por nome</label>
              <i className="ph-magnifying-glass-light"></i>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Pesquise por nome"
              />
            </div>
            <div className="search-field select">
              <label className="sr-only" for="city">Selecione uma cidade</label>
              <i className="ph-map-pin-light"></i>
              <select name="city" id="city">
                <option value="0" selected>Selecione sua cidade</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-de-janeiro">Rio de Janeiro</option>
                <option value="salvador">Salvador</option>
              </select>
              <i className="ph-caret-down-light"></i>
            </div>
            <button className="btn primary">Buscar agora</button>
          </form>
        </div>
      </header>

      <main>
        <div className="content">
          <section className="top">
            <h2>Blocos recomendados</h2>
            <div className="view">
              <button className="btn primary">Lista</button>
              <button className="btn secondary">Mapa</button>
            </div>
          </section>
          <section className="cards">

            {blogs.map(blog => (              
            <div key={blog.title} className="card">
              <img src={blog.img} alt="" />

              <div className="content">
                  <h3>{ blog.title}</h3>
                  <p>
                    {blog.description}
                </p>

                <div className="location">
                  <i className="ph-map-pin-light"></i>
                  {blog.local}
                </div>
              </div>
            </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}