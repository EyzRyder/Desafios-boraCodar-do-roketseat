import { useState } from "react";

export const Calculadora = () => {
    const operators= ["+", "-", "/", "*"];
    const [prev, setPrev] = useState("");
    const [inputBox, setInputBox] = useState("");
    const [operatorValue, setOperatorValue] = useState();
    const [calcOperator, setCalcOperator] = useState();
    const [lastOperator, setLastOperator] = useState();
    const [lastButton, setLastButton] = useState("");
    const [firstNum, setFirstNum] = useState(true);
    const [numbers, setNumbers] = useState([]);
    const [total, setTotal] = useState()
    function pressBtn(btn) {
        setLastButton(btn)

        // if button is not an operator or = sign
        if (!operators.includes(btn) && btn != '=') {
            if (firstNum) {
                // and it's a dot, show 0.
                if (btn == '.') {
                    setInputBox('0' + '.')
                }
                // else clear box and show the number
                else {
                    setInputBox(btn)
                }
                setFirstNum(false)
            }
            else {
                // return if the box value is 0
                if (inputBox.length === 1 && inputBox === 0) {
                    if (btn === '.') {
                        setInputBox(inputBox + btn)
                    }
                    return;
                }
                // return if the box already has a dot and clicked button is a dot
                if (inputBox.includes('.') && btn === '.') {
                    return;
                }
                // maximum allowed numbers inputted are 14
                if (inputBox.length === 14) {
                    return;
                }

                // if pressed dot and box already has a - sign, show -0.
                if (btn == '.' && inputBox == "-") {
                    setInputBox('-0' + '.')
                }
                // else append number
                else {
                    setInputBox(inputBox + btn)
                }
            }
        }
        // if it's an operator or = sign
        else {

            if (operatorValue != null && btn == operatorValue) {
                return
            }

            // show minus sign if it's the first value selected and finally return
            if (btn == "-" && inputBox == 0) {
                setInputBox(btn)
                setFirstNum(false)
                setOperatorValue(btn)
                return;
            }
            // return if minus operator pressed and it's already printed on screen 
            else if (operators.includes(btn) && inputBox == "-") {
                return
            }
            // return if minus operator pressed and history already has equal sign
            else if (btn == "-" && operatorValue == "-" && prev.includes("=")) {
                return
            }

            // set value of operator if it's one
            if (operators.includes(btn)) {
                if (typeof lastOperator != "undefined" && lastOperator != null) {
                    setCalcOperator(lastOperator)
                }
                else {
                    setCalcOperator(btn)
                }
                if (btn == "*") {
                    setLastOperator("×")
                }
                else if (btn == "/") {
                    setLastOperator("÷")
                }
                else {
                    setLastOperator(btn)
                }
                setOperatorValue(btn)
                setFirstNum(true)
            }

            // add first number to numbers array and show it on history
            if (numbers.length == 0) {
                setNumbers([...numbers, inputBox])
                if (typeof lastOperator != 'undefined' && lastOperator != null) {
                    setPrev(inputBox + ' ' + lastOperator)
                }
            }

            // rest of calculations
            else {
                if (numbers.length == 1) {
                    setNumbers([...numbers, inputBox])
                }
                var temp_num = inputBox

                // calculate total
                if (btn == '=' && calcOperator != null) {
                    var value = calculate(numbers[0], numbers[1], calcOperator)
                    setTotal(value)
                    setInputBox(total);

                    // append second number to history
                    if (!prev.includes("=")) {
                        setPrev(prev + ' ' + numbers[1] + ' ')
                    }

                    temp_num = numbers[0]

                    setNumbers([total,...numbers])
                    setOperatorValue(null)

                    // replace first number of history with the value of total
                    var history_arr = prev.split(" ")
                    history_arr[0] = temp_num
                    setPrev(history_arr.join(" "))
                }
                // update history with the value on screen and the pressed operator
                else if (calcOperator != null) {
                    setPrev(temp_num + " " + lastOperator)
                    setCalcOperator(btn)
                    setNumbers([])
                    setNumbers([...numbers, inputBox])
                }
            }
        }
    }

    function calculate(num1, num2, operator) {
        let calc;
        if (operator === "+") {
            calc = (parseFloat)(num1) + (parseFloat)(num2)
            setTotal(calc)
        }
        else if (operator === "-") {
            calc = (parseFloat)(num1) - (parseFloat)(num2)
            setTotal(calc)

        }
        else if (operator === "*") {
            calc = (parseFloat)(num1) * (parseFloat)(num2)
            setTotal(calc)

        }
        else if (operator === "/") {
            calc = (parseFloat)(num1) / (parseFloat)(num2)
            setTotal(calc)

        }
        else {
            if (total == inputBox) {
                return total
            }
            else {
                return inputBox
            }
        }
        // if total is not integer, show maximum 12 decimal places
        if (!Number.isInteger(total)) {
            calc = (parseFloat)(total).toPrecision(12)
            setTotal(calc);
        }
        return parseFloat(total);
    }

    function handlePercent() {

    }

    function handlePluesMinus() {

    }
    function handleCEDelete() {
    }



    function handleDeleteAll() {
        window.location.reload()
    }

    // window.addEventListener('keydown', keyPressed);

    // // function to capture keydown events
    function keyPressed(e) {
        e.preventDefault();

        if (e.key == "Delete") {
            deleteAll();
            return;
        }

    }

    return (
        <div>

            <div
                className="mainContainer  p-0 m-0 w-full min-h-screen flex bg-gradient-to-b from-[#807ECE] to-[#8E7ECE] justify-center items-center text-[#EBEBEB]"
            >
                <div
                    className="calculatorContainer w-[22.25rem] h-[34.75rem] bg-[#2D2A37] rounded-[48px] flex flex-col gap-[26px] pb-8 pt-[54px] px-8"
                    style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22) ' }}
                >

                    <div
                        className="calculo w-full px-[18px] flex flex-col gap-2">

                        <h5
                            id="last_operation_history"
                            className="prev text-right text-[#6B6B6B] text-xl">
                            {prev}
                        </h5>

                        <div
                            className="resultado flex items-center"
                        >
                            <img
                                src="/svg/d5/Equals.svg"
                                className="equals flex-1 flex items-center justify-center text-[#6B6B6B] w-5 h-5"
                            />
                            <h1
                                id="box"
                                className="input text-white bg-transparent outline-transparent w-full text-right text-4xl">
                                {inputBox}
                            </h1>
                        </div>
                    </div>

                    <div
                        className="teclado flex flex-wrap gap-3"
                    >
                        <div
                            id="delete"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button text-[#975DFA] rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"
                            onClick={() => { handleCEDelete }}
                        >
                            CE
                        </div>
                        <div
                            id="deleteAll"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"
                            onClick={() => { handleDeleteAll }}
                        >
                            C
                        </div>
                        <div
                            id="percent"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"
                            onClick={() => { handlePercent }}
                        >
                            <img
                                src="/svg/d5/Percent.svg"
                                alt="percent"
                            />
                        </div>
                        <div
                            id="divide"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"
                            onClick={() => { pressBtn("/") }}
                        >
                            <img
                                src="/svg/d5/Divide.svg"
                                alt="divide simbolo"

                            />
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('7') }}>
                            7
                        </div>
                        <div
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('8') }}>
                            8
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('9') }}>9</div>
                        <div
                            id="multi"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"
                            onClick={() => { pressBtn("*") }}
                        >
                            <img
                                src="/svg/d5/X.svg"
                                alt=""
                            />
                        </div>
                        <div
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('4') }}
                        >
                            4
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('5') }}
                        >
                            5
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('6') }}
                        >
                            6
                        </div>
                        <div
                            id="sub"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]" onClick={() => { pressBtn("-") }}
                        >
                            <img
                                src="/svg/d5/Minus.svg"
                                alt=""

                            />
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('1') }}
                        >
                            1
                        </div>
                        <div
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('2') }}
                        >
                            2
                        </div>
                        <div
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('3') }}
                        >
                            3
                        </div>
                        <div
                            id="sum"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"
                            onClick={() => { pressBtn("+") }}
                        >
                            <img
                                src="/svg/d5/Plus.svg"
                                alt=""
                            />
                        </div>
                        <div
                            id="plusMinus"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"
                            onClick={() => { handlePluesMinus }}
                        >
                            <img
                                src="/svg/d5/PlusMinus.svg"
                                alt=""
                            />
                        </div>
                        <div
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn('0') }}
                        >
                            0
                        </div>
                        <div
                            id="dot"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer num bg-[#2D2A37] hover:bg-[#0f0e12]"
                            onClick={() => { pressBtn(".") }}
                        >
                            .
                        </div>
                        <div
                            id="equal"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            className="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer operator bg-[#7F45E2] hover:bg-[#0f0e12]"
                            onClick={() => { pressBtn("=") }}
                        >
                            <img
                                src="/svg/d5/Equals (1).svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}