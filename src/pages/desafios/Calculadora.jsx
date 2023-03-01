export const Calculadora = () => {
  return (
    <div class="mainContainer">
      <div class="calculatorContainer">

        <div class="calculo">
          <h5 id="last_operation_history" class="prev"></h5>
          <div class="resultado">
            <img src="./assets/svgs/Equals.svg" class="equals" />
            <h1 id="box" class="input">0</h1>
          </div>
        </div>

        <div class="teclado">
          <div id="delete" class="button">CE</div>
          <div id="deleteAll" class="button">C</div>
          <div id="percent" class="button"><img src="./assets/svgs/Percent.svg" alt="percent"/></div>
          <div id="divide" value="/" class="button operator"><img src="./assets/svgs/Divide.svg" alt="divide simbolo"/></div>
          <div class="button num">7</div>
          <div class="button num">8</div>
          <div class="button num">9</div>
          <div id="multi" value="*" class="button operator"><img src="./assets/svgs/X.svg" alt=""/></div>
          <div class="button num">4</div>
          <div class="button num">5</div>
          <div class="button num">6</div>
          <div id="sub" value="-" class="button operator"><img src="./assets/svgs/Minus.svg" alt=""/></div>
          <div class="button num">1</div>
          <div class="button num">2</div>
          <div class="button num">3</div>
          <div id="sum" value="+" class="button operator"><img src="./assets/svgs/Plus.svg" alt=""/></div>
          <div id="plusMinus" class="button"><img src="./assets/svgs/PlusMinus.svg" alt=""/></div>
          <div class="button num">0</div>
          <div id="dot" class="button num">.</div>
          <div id="equal" class="button operator" value="="><img src="./assets/svgs/Equals (1).svg" alt=""/></div>
        </div>
      </div>
    </div>
  )
}