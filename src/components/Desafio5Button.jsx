import { useState } from 'react';

export const Desafio5Button = ({ handleButton, children, isOperator = false, isEqual=false }) => {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="button rounded-full h-16 w-16 bg-gradient-to-b from-[#00000005] to-[#ffffff05] text-2xl text-center flex items-center justify-center transition-all ease-in-out cursor-pointer"
      style={{
        boxShadow: '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),inset 0px 2px 3px rgba(255, 255, 255, 0.06)',
        backgroundColor: isEqual ?'#7F45E2':isHovering ? '#0f0e12': isOperator? '#462878': '#2D2A37'
      }}
      onClick={handleButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
