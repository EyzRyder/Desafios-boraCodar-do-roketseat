export const Desafio4YourBubble = ({ time, msg }) => {
  return (
    <div className="w-full flex flex-row-reverse float-right">
      <div className="items-end flex flex-col gap-[10px] max-sm:w-[50%] w-fit">
        <p className="flex flex-row-reverse float-right text-right text-xs">
          Voce - {time}
        </p>
        <p className="flex flex-row-reverse float-right text-right bg-[#07847E] rounded-tr-none p-[14px] w-fit rounded-lg ">
          {msg}
        </p>
      </div>
    </div>
  )
}