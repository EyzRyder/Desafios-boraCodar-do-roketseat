import './Dashboard.scss'
export const Dashboard = () => {
  return (
    <div className="dashboardContainer ">
      <div id="app" className=" grid">
        <div className="box nps grid">
          <div className="top text-center">NPS geral</div>
          <div className="middle grid">
            <img src="/public/svg/d8/smile.svg" alt="bolinha verde sorrindo" />
            Excelente
          </div>
          <div className="bottom">
            <span>NPS Score</span>
            <span>75</span>
          </div>
        </div>
        <div className="box sell grid">
          <div className="top text-center">Vendas fechadas</div>
          <div className="middle">
            <svg viewBox="0 0 232 232">
              <circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#D9D9D9" />
              <circle
                cx="50%"
                cy="50%"
                r="98.5"
                stroke="url(#paint0_linear_201_85)"
                style={{
                  strokeDashoffset: "calc(618-(618 * 70%) / 100)"
                }}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_85"
                  x1="-9"
                  y1="82"
                  x2="145"
                  y2="178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CE9FFC" />
                  <stop offset="1" stopColor="#7367F0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="content">
              <h3>70%</h3>
              <p>alcançada</p>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <span>Esperado</span>
              <span>100</span>
            </div>
            <div className="item">
              <span

              >
                Alcançado</span
              >
              <span>70</span>
            </div>
          </div>
        </div>
        <div className="box target grid">
          <div className="top text-center">Meta mensal</div>
          <div className="middle">
            <svg viewBox="0 0 232 232">
              <circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#D9D9D9" />
              <circle
                cx="50%"
                cy="50%"
                r="98.5"
                stroke="url(#paint0_linear_201_104)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_104"
                  x1="0.5"
                  y1="82"
                  x2="154.842"
                  y2="178.702"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#DF9780" />
                  <stop offset="1" stopColor="#A66DE9" />
                </linearGradient>
              </defs>
            </svg>

            <div className="content">
              <h3>90%</h3>
              <p>alcançada</p>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <span>Esperado</span>
              <span>R$ 70K</span>
            </div>
            <div className="item">
              <span
              >Alcançado</span
              >
              <span>R$ 63K</span>
            </div>
          </div>
        </div>
        <div className="box weekly-sell grid">
          <div className="top">Vendas por dia da semana</div>

          <div className="wrapper">
            <div className="left grid">
              <div className="most-sell grid">
                <span>Dia com mais vendas</span>
                quarta-feira
              </div>
              <div className="less-sell grid">
                <span>Dia com menos vendas</span>
                domingo
              </div>
            </div>
            <div className="right">
              <div className="bars">
                <div className="bar-wrapper">
                  <div className="bar"></div>
                  <span>dom</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar"></div>
                  <span>seg</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar"></div>
                  <span>ter</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" ></div>
                  <span>qua</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar"></div>
                  <span>qui</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" ></div>
                  <span>sex</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar"></div>
                  <span>sab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}