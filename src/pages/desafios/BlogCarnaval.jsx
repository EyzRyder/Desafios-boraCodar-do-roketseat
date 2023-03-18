import "./BlogCarnaval.scss"
export const BlogCarnaval = () => {
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
            <div className="card">
              <img src="/img/d7/01.jpeg" alt="" />

              <div className="content">
                <h3>O Python do vovô não sobe mais</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div className="location">
                  <i className="ph-map-pin-light"></i>
                  São Paulo - SP
                </div>
              </div>
            </div>

            <div className="card">
              <img src="/img/d7/02.jpeg" alt="" />

              <div className="content">
                <h3>Todo mundo null</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div className="location">
                  <i className="ph-map-pin-light"></i>
                  Salvador - BA
                </div>
              </div>
            </div>

            <div className="card">
              <img src="/img/d7/03.jpeg" alt="" />

              <div className="content">
                <h3>Hoje dou exception</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div className="location">
                  <i className="ph-map-pin-light"></i>
                  Rio de Janeiro - RJ
                </div>
              </div>
            </div>

            <div className="card">
              <img src="/img/d7/01.jpeg" alt="" />

              <div className="content">
                <h3>O Python do vovô não sobe mais</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div className="location">
                  <i className="ph-map-pin-light"></i>
                  São Paulo - SP
                </div>
              </div>
            </div>

            <div className="card">
              <img src="/img/d7/02.jpeg" alt="" />

              <div className="content">
                <h3>Todo mundo null</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div className="location">
                  <i className="ph-map-pin-light"></i>
                  Salvador - BA
                </div>
              </div>
            </div>

            <div className="card">
              <img src="/img/d7/03.jpeg" alt="" />

              <div className="content">
                <h3>Hoje dou exception</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div className="location">
                  <i className="ph-map-pin-light"></i>
                  Rio de Janeiro - RJ
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}