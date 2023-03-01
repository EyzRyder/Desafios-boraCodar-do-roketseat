export const Calculadora = () => {

  // const operator = document.getElementsByClassName("operator");
  // const CE_delete = document.getElementById("delete");
  // const C_deleteAll = document.getElementById("deleteAll");
  // const percent = document.getElementById("percent");
  // const plusMinus = document.getElementById("plusMinus");
  // const dot = document.getElementById("dot");
  // const equal = document.getElementById("equal").getAttribute('value');
  // const operators = ["+", "-", "/", "*"];

  // let prev = document.getElementById("last_operation_history");
  // let inputBox = document.getElementById("box");

  // let operator_value;
  // let last_button;
  // let calc_operator;
  // var firstNum = true;
  // let numbers = [];


  // document.querySelectorAll(".num").forEach(btn => {
  //   btn.addEventListener('click', (e) => {
  //     pressBtn(e.currentTarget.innerText);
  //   });
  // });

  // document.querySelectorAll(".operator").forEach(operator => {
  //   operator.addEventListener('click', (e) => {
  //     pressBtn(e.currentTarget.getAttribute('value'));
  //   });
  // });

  // percent.addEventListener('click', () => {

  //   if (numbers.length > 0 && typeof last_operator != "undefined") {
  //     if (last_operator == "+" || last_operator == "-") {
  //       inputBox.innerText = numbers * inputBox.innerText / 100
  //     }
  //     else {
  //       inputBox.innerText = inputBox.innerText / 100
  //     }
  //   }
  //   else {
  //     inputBox.innerText = inputBox.innerText / 100
  //   }
  //   numbers = []
  //   numbers.push(inputBox.innerText)

  // })

  // plusMinus.addEventListener('click', () => {
  //   // if any operator is already pressed
  //   if (typeof last_operator != "undefined") {
  //     if (numbers.length > 0) {
  //       // if last button pressed is an operator
  //       if (operators.includes(last_button)) {
  //         // if the displayed text is just a negative sign, replace it with a 0
  //         if (inputBox.innerText == "-") {
  //           inputBox.innerText = 0
  //           firstNum = true
  //           return
  //         }
  //         // if the displayed text is not a just a negative sign, replace it with a negative sign
  //         else {
  //           inputBox.innerText = "-"
  //           firstNum = false
  //         }
  //       }
  //       // if last button pressed is not an operator, change its sign
  //       else {
  //         inputBox.innerText = -inputBox.innerText

  //         if (numbers.length == 1) {
  //           numbers[0] = inputBox.innerText
  //         }
  //         else {
  //           numbers[1] = inputBox.innerText
  //         }
  //       }
  //     }
  //     return
  //   }

  //   // if displayed text is 0, replace it with a negative sign
  //   if (inputBox.innerText == 0) {
  //     inputBox.innerText = "-"
  //     firstNum = false
  //     return
  //   }
  //   inputBox.innerText = -inputBox.innerText
  // });

  // C_deleteAll.addEventListener('click', () => {
  //   deleteAll();
  // });

  // CE_delete.addEventListener('click', () => {

  //   if (numbers.length > 0 && typeof last_operator != "undefined") {
  //     inputBox.innerText = 0
  //     var temp = numbers[0]
  //     numbers = []
  //     numbers.push(temp)
  //     firstNum = true;
  //   }
  // })

  // function pressBtn(btn) {
  //   last_button = btn;

  //   // if button is not an operator or = sign
  //   if (!operators.includes(btn) && btn != equal) {

  //     // if it is the first button clicked
  //     if (firstNum) {
  //       // and it's a dot, show 0.
  //       if (btn == dot) {
  //         inputBox.innerText = "0" + dot
  //       }
  //       // else clear box and show the number
  //       else {
  //         inputBox.innerText = btn;
  //       }
  //       firstNum = false;
  //     }
  //     else {
  //       // return if the box value is 0
  //       if (inputBox.innerText.length == 1 && inputBox.innerText == 0) {
  //         if (btn == dot) {
  //           inputBox.innerText += btn;
  //         }
  //         return;
  //       }
  //       // return if the box already has a dot and clicked button is a dot
  //       if (inputBox.innerText.includes(dot) && btn == dot) {
  //         return;
  //       }
  //       // maximum allowed numbers inputted are 14
  //       if (inputBox.innerText.length == 14) {
  //         return;
  //       }

  //       // if pressed dot and box already has a - sign, show -0.
  //       if (btn == dot && inputBox.innerText == "-") {
  //         inputBox.innerText = "-0" + dot;
  //       }
  //       // else append number
  //       else {
  //         inputBox.innerText += btn;
  //       }
  //     }
  //   }
  //   // if it's an operator or = sign
  //   else {
  //     if (operator_value != null && btn == operator_value) {
  //       return
  //     }
  //     // show minus sign if it's the first value selected and finally return
  //     if (btn == "-" && inputBox.innerText == 0) {
  //       inputBox.innerText = btn;
  //       firstNum = false;
  //       operator_value = btn

  //       return;
  //     }
  //     // return if minus operator pressed and it's already printed on screen 
  //     else if (operators.includes(btn) && inputBox.innerText == "-") {
  //       return
  //     }
  //     // return if minus operator pressed and history already has equal sign
  //     else if (btn == "-" && operator_value == "-" && last_operation_history.innerText.includes("=")) {
  //       return
  //     }

  //     // set value of operator if it's one
  //     if (operators.includes(btn)) {
  //       if (typeof last_operator != "undefined" && last_operator != null) {
  //         calc_operator = last_operator
  //       }
  //       else {
  //         calc_operator = btn
  //       }
  //       if (btn == "*") {
  //         last_operator = "×"
  //       }
  //       else if (btn == "/") {
  //         last_operator = "÷"
  //       }
  //       else {
  //         last_operator = btn
  //       }
  //       operator_value = btn
  //       firstNum = true
  //     }
  //     // add first number to numbers array and show it on history
  //     if (numbers.length == 0) {
  //       numbers.push(inputBox.innerText)
  //       if (typeof last_operator != "undefined" && last_operator != null) {
  //         last_operation_history.innerText = inputBox.innerText + " " + last_operator
  //       }
  //     }
  //     // rest of calculations
  //     else {
  //       if (numbers.length == 1) {
  //         numbers[1] = inputBox.innerText
  //       }
  //       var temp_num = inputBox.innerText

  //       // calculate total
  //       if (btn == equal && calc_operator != null) {
  //         var total = calculate(numbers[0], numbers[1], calc_operator)
  //         inputBox.innerText = total;

  //         // append second number to history
  //         if (!last_operation_history.innerText.includes("=")) {
  //           last_operation_history.innerText += " " + numbers[1] + " "
  //         }

  //         temp_num = numbers[0]

  //         numbers[0] = total
  //         operator_value = null

  //         // replace first number of history with the value of total
  //         var history_arr = last_operation_history.innerText.split(" ")
  //         history_arr[0] = temp_num
  //         last_operation_history.innerText = history_arr.join(" ")
  //       }
  //       // update history with the value on screen and the pressed operator
  //       else if (calc_operator != null) {
  //         last_operation_history.innerText = temp_num + " " + last_operator
  //         calc_operator = btn
  //         numbers = []
  //         numbers.push(inputBox.innerText)
  //       }
  //     }
  //   }
  // }

  // function calculate(num1, num2, operator) {
  //   if (operator === "+") {
  //     total = (parseFloat)(num1) + (parseFloat)(num2)
  //   }
  //   else if (operator === "-") {
  //     total = (parseFloat)(num1) - (parseFloat)(num2)
  //   }
  //   else if (operator === "*") {
  //     total = (parseFloat)(num1) * (parseFloat)(num2)
  //   }
  //   else if (operator === "/") {
  //     total = (parseFloat)(num1) / (parseFloat)(num2)
  //   }
  //   else {
  //     if (total == inputBox.innerText) {
  //       return total
  //     }
  //     else {
  //       return inputBox.innerText
  //     }
  //   }
  //   // if total is not integer, show maximum 12 decimal places
  //   if (!Number.isInteger(total)) {
  //     total = total.toPrecision(12);
  //   }
  //   return parseFloat(total);
  // }

  // function deleteAll() {
  //   window.location.reload()
  // }

  // document.addEventListener('keydown', keyPressed);

  // // function to capture keydown events
  // function keyPressed(e) {
  //   e.preventDefault();

  //   if (e.key == "Delete") {
  //     deleteAll();
  //     return;
  //   }

  //   var isNumber = isFinite(e.key);
  //   var enterPress;
  //   var dotPress;
  //   var commaPress = false;

  //   if (e.key == "Enter") {
  //     enterPress = equal;
  //   }
  //   if (e.key == ".") {
  //     dotPress = dot;
  //   }
  //   if (e.key == ",") {
  //     commaPress = true;
  //   }

  //   if (isNumber || operators.includes(e.key) || e.key == "Enter" || e.key == dotPress ||
  //     commaPress || e.key == "Backspace") {
  //     if (e.key == "Enter") {
  //       pressBtn(enterPress)
  //     }
  //     else if (commaPress) {
  //       pressBtn(dot)
  //     }
  //     else {
  //       pressBtn(e.key)
  //     }
  //   }
  // }

  return (
    <div>

      <div class="mainContainer  p-0 m-0 w-full min-h-screen flex bg-gradient-to-b from-[#807ECE] to-[#8E7ECE] justify-center items-center text-[#EBEBEB]">
        <div class="calculatorContainer w-[22.25rem] h-[34.75rem] bg-[#2D2A37] rounded-[48px] flex flex-col gap-[26px] pb-8 pt-[54px] px-8;" style={{ boxShadow:` 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22)`}}>

          <div class="calculo w-full px-[18px] flex flex-col gap-2">
            <h5 id="last_operation_history" class="prev text-right text-[#6B6B6B] text-xl"></h5>
            <div class="resultado flex items-center">
              <img src="/public/svg/d5/Equals.svg" class="equals flex-1 flex items-center justify-center text-[#6B6B6B] w-5 h-5" />
              <h1 id="box" class="input flex-[7] text-right text-4xl">0</h1>
            </div>
          </div>

          <div class="teclado flex flex-wrap gap-3">
            <div id="delete" style={{
              boxShadow:`
            0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button text-[#975DFA] rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]">CE</div>
            <div id="deleteAll" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]">C</div>
            <div id="percent" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"><img src="/public/svg/d5/Percent.svg" alt="percent" /></div>
            <div id="divide" value="/" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"><img src="/public/svg/d5/Divide.svg" alt="divide simbolo" /></div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">7</div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">8</div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">9</div>
            <div id="multi" value="*" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"><img src="/public/svg/d5/X.svg" alt="" /></div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">4</div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">5</div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">6</div>
            <div id="sub" value="-" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"><img src="/public/svg/d5/Minus.svg" alt="" /></div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">1</div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">2</div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">3</div>
            <div id="sum" value="+" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"><img src="/public/svg/d5/Plus.svg" alt="" /></div>
            <div id="plusMinus" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"><img src="/public/svg/d5/PlusMinus.svg" alt="" /></div>
            <div style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num">0</div>
            <div id="dot" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer num bg-[#2D2A37] hover:bg-[#0f0e12]">.</div>
            <div id="equal" style={{boxShadow:`0px 11px 7px rgba(0, 0, 0, 0.01),
        0px 7px 7px rgba(0, 0, 0, 0.04),
        0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.26),
        0px 0px 2px rgba(0, 0, 0, 0.29),
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);`}} class="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer operator bg-[#7F45E2] hover:bg-[#0f0e12]" value="="><img src="/public/svg/d5/Equals (1).svg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}