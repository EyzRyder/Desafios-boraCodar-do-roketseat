import { useState } from "react";
import { Desafio5Button } from "../../components/Desafio5Button";

export const Calculadora = () => {
    const operators = ["+", "-", "/", "*"];
    const [prev, setPrev] = useState("");
    const [inputBox, setInputBox] = useState("");
    function handleCEDelete (){}
    function handleDeleteAll (){}
    function handlePercent (){}
    function handlePluesMinus (){}
    function pressBtn (){}
    const buttons = [
        {
            id:'01',
            child: (
                <span className="text-[#975DFA]">
                CE
                </span>
            ),
            function:  handleCEDelete,
            isOperator: false,
            isEqual:false,
        },
        {
            id:'02',
            child: "C",
            function: handleDeleteAll,
            isOperator: false,
            isEqual:false,
        },
        {
            id:'03',
            child: (
                <img
                src="/svg/d5/Percent.svg"
                alt="percent"
                />
            ),
            function: handlePercent,
            isOperator: false,
            isEqual:false,
        },
        {
            id:'04',
            child: (
                <img
                src="/svg/d5/Divide.svg"
                alt="divide simbolo"
                />
            ),
            function: pressBtn('/'),
            isOperator: true,
            isEqual:false,
        },
        {
            id:'05',
            child: "7",
            function: pressBtn('7'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'06',
            child: "8",
            function: pressBtn('8'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'07',
            child: "9",
            function: pressBtn('9'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'08',
            child: (
                <img
                src="/svg/d5/X.svg"
                alt=""
                />
            ),
            function: pressBtn('*'),
            isOperator: true,
            isEqual:false,
        },
        {
            id:'09',
            child: "4",
            function: pressBtn('4'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'10',
            child: "5",
            function: pressBtn('5'),
            isOperator: false,
            isEqual: false,
        },
        {
            id:'11',
            child: "6",
            function: pressBtn('6'),
            isOperator: false,
            isEqual: false,
        },
        {
            id:'12',
            child: (
                <img
                    src="/svg/d5/Minus.svg"
                    alt="minus"
                />
            ),
            function: pressBtn('-'),
            isOperator: true,
            isEqual:false,
        },
        {
            id:'13',
            child: "1",
            function: pressBtn('1'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'14',
            child: "2",
            function: pressBtn('2'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'15',
            child: "3",
            function: pressBtn('3'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'16',
            child: (
                <img
                    src="/svg/d5/Plus.svg"
                    alt=""
                />
            ),
            function: pressBtn('+'),
            isOperator: true,
            isEqual:false,
        },
        {
            id:'17',
            child: (
                <img
                    src="/svg/d5/PlusMinus.svg"
                    alt=""
                />
            ),
            function: handlePluesMinus,
            isOperator: false,
            isEqual:false,
        },
        {
            id:'18',
            child: "0",
            function: pressBtn('0'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'1',
            child: ",",
            function: pressBtn('.'),
            isOperator: false,
            isEqual:false,
        },
        {
            id:'19',
            child: (
                <img
                    src="/svg/d5/Equals (1).svg"
                    alt=""
                />
            ),
            function: pressBtn('='),
            isOperator: true,
            isEqual:true,
        },
    ]

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
                        {buttons.map(button => (
                            <Desafio5Button
                                key={button.id}
                                handleButton={() => {button.function}}
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