import { useState } from "react";

export const Calculadora = () => {
    const [operators, setOperators] = useState(["+", "-", "/", "*"]);
    const [prev, setPrev] = useState();
    const [inputBox, setInputBox] = useState();
    const [operatorValue, setOperatorValue] = useState();
    const [lastButton, setLastButton] = useState();
    const [calcOperator, setCalcOperator] = useState();
    const [firstNum, setFirstNum] = useState(true);
    const [numbers, setNumbers] = useState([]);

    function handlePercent() {

    }

    function handlePluesMinus() {

    }
    function handleCEDelete() {
    }

    function pressBtn(btn) {

    }

    function calculate(num1, num2, operator) {

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
                class="mainContainer  p-0 m-0 w-full min-h-screen flex bg-gradient-to-b from-[#807ECE] to-[#8E7ECE] justify-center items-center text-[#EBEBEB]"
            >
                <div
                    class="calculatorContainer w-[22.25rem] h-[34.75rem] bg-[#2D2A37] rounded-[48px] flex flex-col gap-[26px] pb-8 pt-[54px] px-8"
                    style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22) ' }}
                >

                    <div
                        class="calculo w-full px-[18px] flex flex-col gap-2">

                        <h5
                            id="last_operation_history"
                            class="prev text-right text-[#6B6B6B] text-xl">
                            {prev}
                        </h5>

                        <div
                            class="resultado flex items-center"
                        >
                            <img
                                src="/svg/d5/Equals.svg"
                                class="equals flex-1 flex items-center justify-center text-[#6B6B6B] w-5 h-5"
                            />
                            <h1
                                id="box"
                                class="input text-white bg-transparent outline-transparent w-full text-right text-4xl">
                                {inputBox}
                            </h1>
                        </div>
                    </div>

                    <div
                        class="teclado flex flex-wrap gap-3"
                    >
                        <div
                            id="delete"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button text-[#975DFA] rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"
                            onClick={() => { handleCEDelete }}
                        >
                            CE
                        </div>
                        <div
                            id="deleteAll"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"
                            onClick={() => { handleDeleteAll }}
                        >
                            C
                        </div>
                        <div
                            id="percent"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"
                            onClick={() => { handlePercent }}
                        >
                            <img
                                src="/svg/d5/Percent.svg"
                                alt="percent"
                            />
                        </div>
                        <div
                            id="divide"
                            value="/"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"
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
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(7) }}>
                            7
                        </div>
                        <div
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(8) }}>
                            8
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(9) }}>9</div>
                        <div
                            id="multi"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"
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
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(4) }}
                        >
                            4
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(5) }}
                        >
                            5
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(6) }}
                        >
                            6
                        </div>
                        <div
                            id="sub"
                            value="-"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]" onClick={() => { pressBtn("-") }}
                        >
                            <img
                                src="/svg/d5/Minus.svg"
                                alt=""

                            />
                        </div>
                        <div style={{
                            boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                        }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(1) }}
                        >
                            1
                        </div>
                        <div
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(2) }}
                        >
                            2
                        </div>
                        <div
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(3) }}
                        >
                            3
                        </div>
                        <div
                            id="sum"
                            value="+"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] operator bg-[#462878]"
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
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12]"
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
                            class="button rounded-full h-16 w-16 bg-[#2D2A37] bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer hover:bg-[#0f0e12] num"
                            onClick={() => { pressBtn(0) }}
                        >
                            0
                        </div>
                        <div
                            id="dot"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer num bg-[#2D2A37] hover:bg-[#0f0e12]"
                            onClick={() => { pressBtn(".") }}
                        >
                            .
                        </div>
                        <div
                            id="equal"
                            style={{
                                boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01),0px 7px 7px rgba(0, 0, 0, 0.04),0px 4px 6px rgba(0, 0, 0, 0.1),0px 2px 4px rgba(0, 0, 0, 0.26),0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)'
                            }}
                            class="button rounded-full h-16 w-16  bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-[#EBEBEB] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer operator bg-[#7F45E2] hover:bg-[#0f0e12]"
                            onClick={() => { pressBtn("=") }}
                            value="="
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