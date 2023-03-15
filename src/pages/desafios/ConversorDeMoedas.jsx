import './ConversorDeMoedas.scss'
import "/node_modules/flag-icons/css/flag-icons.min.css";

import arrow from '/svg/d9/arrows-exchange.svg'

import Chart from "react-apexcharts";
import { state } from '../../chartData';
import { useState } from 'react';


export const ConversorDeMoedas = () => {
  const [moeda1, setMoeda1] = useState();
  const [moeda2, setMoeda2] = useState();

  return (
    <div className='conversorDeMoedasContainer bg-[#f8fafc] min-h-screen grid place-content-center'>
      <main>

        <section className='conversor'>
          <h2 className='text-xl'>Conversor de moedas</h2>

          <div className='wrapper'>

            <div className='money-wrapper'>
              <input type="text" className="amount" placeholder="$1.000" value={moeda1} onChange={(e)=>{setMoeda1(e.target.value)}} />

              <div className='dropdown'>
                <div className="selected">
                  <span className="fi fi-us fis"></span>
                  USD
                </div>

                <ul>
                  <li>
                    <span className="fi fi-br fis"></span>
                    BRL
                  </li>
                  <li>
                    <span className="fi fi-us fis"></span>
                    USD
                  </li>
                  <li>
                    <span className="fi fi-eu fis"></span>
                    EUR
                  </li>
                  <li>
                    <span className="fi fi-gb fis"></span>
                    GBP
                  </li>
                </ul>
              </div>
            </div>

            <div className="middle">
              <img src={arrow} alt="Converter moeda" />
            </div>
            <div className='money-wrapper'>
              <input type="text" className="amount" placeholder="$5.148,20" value={moeda2} onChange={(e)=>{setMoeda2(e.target.value)}} />
              <div className='dropdown'>
                <div className="selected">
                  <span className="fi fi-br fis"></span>
                  BRL
                </div>

                <ul>
                  <li>
                    <span className="fi fi-us fis"></span>
                    USD
                  </li>
                  <li>
                    <span className="fi fi-us fis"></span>
                    USD
                  </li>
                  <li>
                    <span className="fi fi-eu fis"></span>
                    EUR
                  </li>
                  <li>
                    <span className="fi fi-gb fis"></span>
                    GBP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='cambio'>
          <h2>Taxa de câmbio</h2>
          <div className='wrapper'>
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              height="350"
            />
            <div className="chart-controls">
              <button>1D</button>
              <button>5D</button>
              <button className="active">1M</button>
              <button>1A</button>
              <button>5A</button>
              <button>Máx</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
