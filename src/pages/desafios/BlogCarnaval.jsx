export const BlogCarnaval = () => {
  return (
    <div>
      <header>
        <div class="content">
          <div class="top">
            <p>find your block</p>
            <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
          </div>

          <form class="search">
            <div class="search-field">
              <label class="sr-only" for="name">Pesquise por nome</label>
              <i class="ph-magnifying-glass-light"></i>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Pesquise por nome"
              />
            </div>
            <div class="search-field select">
              <label class="sr-only" for="city">Selecione uma cidade</label>
              <i class="ph-map-pin-light"></i>
              <select name="city" id="city">
                <option value="0" selected>Selecione sua cidade</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-de-janeiro">Rio de Janeiro</option>
                <option value="salvador">Salvador</option>
              </select>
              <i class="ph-caret-down-light"></i>
            </div>
            <button class="btn primary">Buscar agora</button>
          </form>
        </div>
      </header>

      <main>
        <div class="content">
          <section class="top">
            <h2>Blocos recomendados</h2>
            <div class="view">
              <button class="btn primary">Lista</button>
              <button class="btn secondary">Mapa</button>
            </div>
          </section>
          <section class="cards">
            <div class="card">
              <img src="./assets/01.jpeg" alt="" />

              <div class="content">
                <h3>O Python do vovô não sobe mais</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div class="location">
                  <i class="ph-map-pin-light"></i>
                  São Paulo - SP
                </div>
              </div>
            </div>

            <div class="card">
              <img src="./assets/02.jpeg" alt="" />

              <div class="content">
                <h3>Todo mundo null</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div class="location">
                  <i class="ph-map-pin-light"></i>
                  Salvador - BA
                </div>
              </div>
            </div>

            <div class="card">
              <img src="./assets/03.jpeg" alt="" />

              <div class="content">
                <h3>Hoje dou exception</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div class="location">
                  <i class="ph-map-pin-light"></i>
                  Rio de Janeiro - RJ
                </div>
              </div>
            </div>

            <div class="card">
              <img src="./assets/01.jpeg" alt="" />

              <div class="content">
                <h3>O Python do vovô não sobe mais</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div class="location">
                  <i class="ph-map-pin-light"></i>
                  São Paulo - SP
                </div>
              </div>
            </div>

            <div class="card">
              <img src="./assets/02.jpeg" alt="" />

              <div class="content">
                <h3>Todo mundo null</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div class="location">
                  <i class="ph-map-pin-light"></i>
                  Salvador - BA
                </div>
              </div>
            </div>

            <div class="card">
              <img src="./assets/03.jpeg" alt="" />

              <div class="content">
                <h3>Hoje dou exception</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>

                <div class="location">
                  <i class="ph-map-pin-light"></i>
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