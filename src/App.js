import React from 'react'
import "./index.css";

function App() {
  return (
    <div>
      <h1 className="title-footer">Loja de Carros!</h1>

      <div className="main-item">
        <div>
          <section className="title-jetta">
            <section>
              <p>Jetta</p>
            </section>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Volkswagen</p>
            <p>Preço: R$144.000</p>
            <p>Tipo: Sedan</p>
          </section>
        </div>

        <div>
          <section className="title-polo">
            <p>Polo</p>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Volkswagen</p>
            <p>Preço: R$70.000</p>
            <p>Tipo: Hatch</p>
          </section>
        </div>
        <div>
          <section className="title-tcross">
            <p>T-Cross</p>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Volkswagen</p>
            <p>Preço: R$123.000</p>
            <p>Tipo: SUV</p>
          </section>
        </div>
        <div>
          <section className="title-tiguan">
            <p>Tiguan R-line</p>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Volkswagen</p>
            <p>Preço: R$146.000</p>
            <p>Tipo: SUV</p>
          </section>
        </div>
        <div>
          <section className="title-civic">
            <p>Civic</p>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Honda</p>
            <p>Preço: R$115.000</p>
            <p>Tipo: Sedan</p>
          </section>
        </div>
        <div>
          <section className="title-corolla">
            <p>Corolla</p>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Toyota</p>
            <p>Preço: R$110.000</p>
            <p>Tipo: Sedan</p>
          </section>
        </div>
        <div>
          <section className="title-corollacross">
            <p>Corolla Cross</p>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Toyota</p>
            <p>Preço: R$184.000</p>
            <p>Tipo: SUV</p>
          </section>
        </div>
        <div>
          <section className="title-compass">
            <p>Compass</p>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Jeep</p>
            <p>Preço: R$132.000</p>
            <p>Tipo: SUV</p>
          </section>
        </div>
        <div>
          <section className="title-golf">
            <p>Golf G TI</p>
            <button>+</button>
          </section>
          <section className="item-list">
            <p>Montadora: Volkswagen</p>
            <p>Preço: R$138.000</p>
            <p>Tipo: Hatch</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;