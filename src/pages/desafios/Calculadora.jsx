import { useState } from "react";
import { Desafio5Button } from "../../components/Desafio5Button";

import equal from '../../assets/svg/d5/Equals.svg'
import percent from "../../assets/svg/d5/Percent.svg"
import divide from "../../assets/svg/d5/Divide.svg"
import equals1 from "../../assets/svg/d5/Equals (1).svg"
import minus from "../../assets/svg/d5/Minus.svg"
import plus from "../../assets/svg/d5/Plus.svg"
import plusMinus from "../../assets/svg/d5/PlusMinus.svg"
import times from "../../assets/svg/d5/X.svg"

export function Calculadora () {
    const [prev, setPrev] = useState("");
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0,
    });

    function pressBtn(btn) {

        if (btn === "C") {
            window.location.reload(false);
        }
        if (btn === "CE") {
            return setCalc({
                ...calc,
                sign: "",
                num: 0,
                res: 0,
            });
        }
        if (btn === "+-") {
            return setCalc({
                ...calc,
                num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
                res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
                sign: "",
            });
        }
        if (btn === "%") {
            let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
            let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

            return setCalc({
                ...calc,
                num: (num /= Math.pow(100, 1)),
                res: (res /= Math.pow(100, 1)),
                sign: "",
            });
        }
        if (btn === "=") {
            if (calc.sign && calc.num) {
                const math = (a, b, sign) =>
                    sign === "+"
                        ? a + b
                        : sign === "-"
                            ? a - b
                            : sign === "*"
                                ? a * b
                                : a / b;

                return setCalc({
                    ...calc,
                    res:
                        calc.num === "0" && calc.sign === "/"
                            ? "Can't divide with 0"
                            : toLocaleString(math(Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign)),
                    sign: "",
                    num: 0,
                });
            }
        }
        if (btn === "/" || btn === "*" || btn === "-" || btn === "+") {
            return setCalc({
                ...calc,
                sign: btn,
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: 0,
            });
        }
        if (btn === ".") {
            return setCalc({
                ...calc,
                num: !calc.num.toString().includes(".") ? calc.num + btn : calc.num,
            });
        }

        if (removeSpaces(calc.num).toString().length <= 16) {
            return setCalc({
                ...calc,
                num:
                    calc.num === 0 && btn === "0"
                        ? "0"
                        : removeSpaces(calc.num) % 1 === 0
                            ? toLocaleString(Number(removeSpaces(calc.num + btn)))
                            : toLocaleString(calc.num + btn),
                res: !calc.sign ? 0 : calc.res,
            });
        }
    }
    const buttons = [
        {
            id: '01',
            child: (
                <span className="text-[#975DFA]">
                    CE
                </span>
            ),
            function: () => { pressBtn("CE") },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '02',
            child: "C",
            function: () => { pressBtn("C") },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '03',
            child: (
                <img
                    src={percent}
                    alt="percent"
                />
            ),
            function: () => { pressBtn("%") },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '04',
            child: (
                <img
                    src={divide}
                    alt="divide"
                />
            ),
            function: () => { pressBtn('/') },
            isOperator: true,
            isEqual: false,
        },
        {
            id: '05',
            child: 7,
            function: () => { pressBtn('7') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '06',
            child: 8,
            function: () => { pressBtn('8') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '07',
            child: 9,
            function: () => { pressBtn('9') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '08',
            child: (
                <img
                    src={times}
                    alt="times"
                />
            ),
            function: () => { pressBtn('*') },
            isOperator: true,
            isEqual: false,
        },
        {
            id: '09',
            child: 4,
            function: () => { pressBtn('4') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '10',
            child: 5,
            function: () => { pressBtn('5') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '11',
            child: 6,
            function: () => { pressBtn('6') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '12',
            child: (
                <img
                    src={minus}
                    alt="minus"
                />
            ),
            function: () => { pressBtn('-') },
            isOperator: true,
            isEqual: false,
        },
        {
            id: '13',
            child: 1,
            function: () => { pressBtn('1') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '14',
            child: 2,
            function: () => { pressBtn('2') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '15',
            child: 3,
            function: () => { pressBtn('3') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '16',
            child: (
                <img
                    src={plus}
                    alt="plus"
                />
            ),
            function: () => { pressBtn('+') },
            isOperator: true,
            isEqual: false,
        },
        {
            id: '17',
            child: (
                <img
                    src={plusMinus}
                    alt="plusMinus"
                />
            ),
            function: () => { pressBtn("+-") },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '18',
            child: 0,
            function: () => { pressBtn('0') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '1',
            child: ",",
            function: () => { pressBtn('.') },
            isOperator: false,
            isEqual: false,
        },
        {
            id: '19',
            child: (
                <img
                    src={equals1}
                    alt="equal"
                />
            ),
            function: () => { pressBtn('=') },
            isOperator: true,
            isEqual: true,
        },
    ]

    const toLocaleString = (num) =>
        String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

    const removeSpaces = (num) => num.toString().replace(/\s/g, "");


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
                                src={equal}
                                className="equals flex-1 flex items-center justify-center text-[#6B6B6B] w-5 h-5"
                            />
                            <h1
                                id="box"
                                className="input text-white bg-transparent outline-transparent w-full text-right text-4xl">
                                {calc.num ? calc.num : calc.res}
                            </h1>
                        </div>
                    </div>

                    <div
                        className="teclado flex flex-wrap gap-3"
                    >
                        {buttons.map(button => (
                            <Desafio5Button
                                key={button.id}
                                handleChild={button.function}
                                isOperator={button.isOperator}
                                isEqual={button.isEqual}
                            >
                                {button.child}
                            </Desafio5Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}